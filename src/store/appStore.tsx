import React from 'react';
import { combineReducers, createStore, applyMiddleware  } from 'redux';
import * as fromNewCartItem from './newCartItem/newCartItem.reducers';
import * as fromAuth from 'store/auth/auth.reducers';

// export interface AppState {
//     newCartItem: fromNewCartItem.State;
//     auth: fromAuth.State
// }

function actionClassObjToPlainObj(props: any) {
    // https://redux.js.org/api/applymiddleware
    return (next: any) => (action: any) => {
        let p2 = Object.assign({}, action);
        return next(p2);
    }
}

const appReducer = combineReducers({
    newCartItem: fromNewCartItem.newCartItemReducer,
    auth: fromAuth.authReducer
});

const _appStore = createStore(appReducer, applyMiddleware( actionClassObjToPlainObj));

function AppStore () {
    return null;
}

export default React.memo( AppStore);
export const appStore = _appStore;
export const getState = _appStore.getState;
