import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
import {routerReducer} from 'react-router-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import reducer from './reducers/reducer';
export default createStore(
    combineReducers({
        reducer,
        routing: routerReducer
    }),
    {},
    applyMiddleware(thunk , promise())
);
