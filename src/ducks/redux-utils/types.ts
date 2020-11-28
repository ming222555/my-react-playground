/**
 * https://www.matthewgerstman.com/tech/redux-code-split-typecheck/
 */

import newCartItemReducer, { State as NewCartItemNamespaceShape } from "../newCartItem";
import cartIdReducer, { State as CartIdNamespaceShape } from "../cartId";
import { Reducer } from "redux";

const NEW_CART_ITEM_NAMESPACE_KEY = "NEW_CART_ITEM_NAMESPACE";
const CART_ID_NAMESPACE_KEY = "CART_ID_NAMESPACE";

export type FullStoreShape = {
    [NEW_CART_ITEM_NAMESPACE_KEY]: NewCartItemNamespaceShape,
    [CART_ID_NAMESPACE_KEY]: CartIdNamespaceShape
};
export type StoreShape = Partial<FullStoreShape>;
export type NamespaceKey = keyof StoreShape;
export type ReducerMap = Partial<
{ [k in NamespaceKey]: Reducer<FullStoreShape[k]> }
>;

export const staticReducers: ReducerMap = {
    [NEW_CART_ITEM_NAMESPACE_KEY]: newCartItemReducer,
    [CART_ID_NAMESPACE_KEY]: cartIdReducer
}