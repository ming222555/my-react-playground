import { combineReducers, createStore, Store, applyMiddleware, compose } from "redux";

import { ReducerMap, StoreShape, NamespaceKey, staticReducers } from "./types";
import actionClassObjToPlainObj from './middleware/actionClassObjToPlainObj';

// let reducerMap: ReducerMap = {};
let reducerMap: ReducerMap = staticReducers;

const middlewareEnhancer = applyMiddleware( actionClassObjToPlainObj);
const composedEnhancers = compose(middlewareEnhancer);

function createReducer() {
    return combineReducers({
      ...staticReducers
    })
}

const store = createStore(createReducer(), undefined, composedEnhancers);
export default store;

export function registerReducer(newReducers: ReducerMap): Store<StoreShape> {
    /* reducerMap = { ...reducerMap, ...newReducers }; */
    
    // validate we're not replacing reducers that already exist here.
    /* let newReducersMinusExistingKeys: ReducerMap = {}; */
    
    for (let key in newReducers) {
        if (reducerMap.hasOwnProperty(key)) {
            //
        } else {
            /* newReducersMinusExistingKeys[ key as NamespaceKey] = newReducers[ key as NamespaceKey]; */
            reducerMap = { ...reducerMap, ...newReducers[ key as NamespaceKey] };
        }
    }

    /* reducerMap = { ...reducerMap, ...newReducersMinusExistingKeys }; */

    store.replaceReducer(combineReducers(reducerMap));
    return store;
}
