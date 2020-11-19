import { combineReducers, configureStore, Action } from '@reduxjs/toolkit'

import store from './baseReducer'


import * as fromNewCartItem from 'store/newCartItem/newCartItem.reducers';
import * as fromAuth from 'store/auth/auth.reducers';

const baseReducer = combineReducers( {
    newCartItem: fromNewCartItem.newCartItemReducer,
    auth: fromAuth.authReducer
})

type baseState = ReturnType<typeof baseReducer>;

// function zz(reducerFilepath: string, fn: (reducer_filepath: string) => any = (reducer_filepath: string) => {
//     const newRootReducer = require(reducer_filepath).default as baseState;
    
//     store.replaceReducer(newRootReducer);
// }){
//     fn( reducerFilepath);
// };

function zz(reducerFilepath: string, fn: (reducer_filepath: string) => any = (reducer_filepath: string) => {
    const newRootReducer = require(reducer_filepath).default as baseState;
    
    store.replaceReducer(baseReducer);
}){
    fn( reducerFilepath);
};

const reducerFilepath = './baseReducer';
zz(reducerFilepath);

export default store;
