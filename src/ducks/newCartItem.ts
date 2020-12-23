import NoAction from './redux-utils/NoAction';
import PayloadAction from './redux-utils/PayloadAction.abstract';

import INEW_CART_ITEM from "ducks/../../backend/src/interfaces/INEW_CART_ITEM.interface";

export interface State extends INEW_CART_ITEM {}

const initialState: State = {
    cartId: 'orig_cartId',
    itemId: 'orig_itemId',
    itemName: 'orig_itemName',
    qty: 321
}

const actionTypes = {
    NEW_CART_ITEM: 'NEW_CART_ITEM'
}

export class NewCartItem implements PayloadAction {
    type = actionTypes.NEW_CART_ITEM;
    constructor(public payload: State) {}
}

const newCartItemReducer = (state: any = initialState, action: NewCartItem | NoAction): State => {
    switch (action.type) {
        case (actionTypes.NEW_CART_ITEM):
            return {...state, ...(action as NewCartItem).payload};
        default:
            return state;
    }
}

export default newCartItemReducer;