import React from 'react';
import ReactDOM from 'react-dom';
//Needed to create the redux store
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, combineReducers} from 'redux';
//Need to install redux logger to monitor changes(middleware)
import {createLogger} from 'redux-logger';
//Need to install redux-thunk for async functions I think they are like sagas
import thunkMiddleware from 'redux-thunk';
import './index.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import {searchRobots, requestRobots} from './reducer';
import 'tachyons';

//Create a root reducer to hold all your reducers to be used with createStore
const rootReducer = combineReducers({searchRobots, requestRobots});
//Enable middleware for redux logger
const logger = createLogger();
//Create the Redux store
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware, logger));

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
