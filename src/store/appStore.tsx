import React from 'react';
import { combineReducers, configureStore, createSlice, Action } from '@reduxjs/toolkit'

// import * as fromApp from 'store/app/app.reducer';

import * as fromNewCartItem from 'store/newCartItem/newCartItem.reducers';
import * as fromAuth from 'store/auth/auth.reducers';

// const store = configureStore({
//     reducer: {
//         posts: fromNewCartItem.newCartItemReducer,
//     }
// })

// import * as fromNewCartItem from 'store/newCartItem/newCartItem.reducers';
// import * as fromAuth from 'store/auth/auth.reducers';

// export interface AppState {
//     newCartItem: fromNewCartItem.State;
//     auth: fromAuth.State
// }

// function actionClassObjToPlainObj(props: any) {
//     // https://redux.js.org/api/applymiddleware
//     return (next: any) => (action: any) => {
//         let p2 = Object.assign({}, action);
//         return next(p2);
//     }
// }

const counterSlice = createSlice({
    name: 'counter',
    initialState: 0,
    reducers: {
      increment: state => state + 1,
      decrement: state => state - 1
    }
  })
  
  let store = configureStore({
    reducer: {counter: counterSlice.reducer}
  })
  
  store = configureStore({
    reducer: {counter: counterSlice.reducer}
  })

function AppStore () {
    return null;
}

export default React.memo( AppStore);
