// import { Reducer } from "redux";
import { Action } from "redux";

import PayloadAction from './redux-utils/PayloadAction.abstract';

export interface State {
    itemId: string;
    price: number;
    qty: number
}

const initialState: State = {
    itemId: 'orig_itemId',
    price: 123,
    qty: 321
}

const actionTypes = {
    NEW_CART_ITEM: 'NEW_CART_ITEM',
    CLEAR_CART_ITEM: 'CLEAR_CART_ITEM'
}

export class NewCartItem implements PayloadAction {
    type = actionTypes.NEW_CART_ITEM;
    constructor(public payload: State) {}
}

export class ClearCartItem implements Action {
    type = actionTypes.CLEAR_CART_ITEM;
}

export type NewCartItemActions = NewCartItem | ClearCartItem; // usage, new NewCartItem({ itemId: 'X123', price: 6, qty: 9 })

const newCartItemReducer = (state: any = initialState, action: NewCartItemActions): State => {
    switch (action.type) {
        case (actionTypes.NEW_CART_ITEM):
            return (action as NewCartItem).payload;
        case (actionTypes.CLEAR_CART_ITEM):
            return initialState;
        default:
            return state;
    }
}

export default newCartItemReducer;