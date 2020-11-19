import { Action } from 'redux';
import NewCartItemInterface from './newCartItem.interface';

export const NEW_CART_ITEM  = 'NEW_CART_ITEM';

export class NewCartItem implements Action {
    readonly type = NEW_CART_ITEM;
    constructor(public payload: NewCartItemInterface) {}
}

export type NewCartItemActions = NewCartItem;
