// import { Reducer } from "redux";
import { Action } from "redux";

import PayloadAction from './redux-utils/PayloadAction.abstract';

export interface State {
    cartId: string;
}

const initialState: State = {
    cartId: 'orig_cartid'
}

const actionTypes = {
    SET_CART_ID: 'CART_ID/SET_CART_ID',
    CLEAR_CART_ID: 'CART_ID/CLEAR_CART_ID'
}

export class SetCartId implements PayloadAction {
    type = actionTypes.SET_CART_ID;
    constructor(public payload: string) {}
}

export class ClearCartId implements Action {
    type = actionTypes.CLEAR_CART_ID;
}

export type CartIdActions = SetCartId | ClearCartId; // use, new CartId({ cartId: 'cartIdzz' })

const cartIdReducer = (state: any = initialState, action: CartIdActions): State => {
    switch (action.type) {
        case (actionTypes.SET_CART_ID):
            return {...state, cartId: (action as SetCartId).payload};
        case (actionTypes.CLEAR_CART_ID):
            return {...initialState};
        default:
            return state;
    }
}

export default cartIdReducer;