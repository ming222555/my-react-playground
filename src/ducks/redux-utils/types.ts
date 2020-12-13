/**
 * https://www.matthewgerstman.com/tech/redux-code-split-typecheck/
 */
import { Reducer } from "redux";

import newCartItemReducer, { State as NewCartItemNamespaceShape } from "../newCartItem";
import authReducer, { State as AuthNamespaceShape } from "../auth";

export const NEW_CART_ITEM_NAMESPACE_KEY = "NEW_CART_ITEM_NAMESPACE";
export const AUTH_NAMESPACE_KEY = "AUTH_NAMESPACE";

export type FullStoreShape = {
    [NEW_CART_ITEM_NAMESPACE_KEY]: NewCartItemNamespaceShape,
    [AUTH_NAMESPACE_KEY]: AuthNamespaceShape
};
export type StoreShape = Partial<FullStoreShape>;
export type NamespaceKey = keyof StoreShape;
export type ReducerMap = Partial<
{ [k in NamespaceKey]: Reducer<FullStoreShape[k]> }
>;

export const staticReducers: ReducerMap = {
    [NEW_CART_ITEM_NAMESPACE_KEY]: newCartItemReducer,
    [AUTH_NAMESPACE_KEY]: authReducer
}