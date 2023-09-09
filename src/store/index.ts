// src/redux/store.ts

import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const middlewares = [thunk];

const store = createStore(rootReducer, applyMiddleware(...middlewares));

export type RootState = any;
export default store;
