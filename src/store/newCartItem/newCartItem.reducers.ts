import NewCartItemInterface from './newCartItem.interface';
import * as NewCartItemActions from './newCartItem.actions';
// import * as fromApp from 'store/appStore';

// export interface FeatureState extends fromApp.AppState {
//     recipes: RecipesInterface
// }

const initialState: NewCartItemInterface = {
    itemId: '',
    price: 0,
    qty: 0
};

export function newCartItemReducer(state = initialState, action: NewCartItemActions.NewCartItemActions): NewCartItemInterface {
    switch (action.type) {
        case (NewCartItemActions.NEW_CART_ITEM):
            return action.payload;
        default:
            return state;
    }
}

// export interface State extends NewCartItemInterface {
// }