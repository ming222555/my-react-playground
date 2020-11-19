import NewRecipeInterface from './recipes.interface';
import * as NewRecipeActions from './recipes.actions';
// import * as fromApp from 'store/appStore';

// export interface FeatureState extends fromApp.AppState {
//     recipes: RecipesInterface
// }

const initialState: NewRecipeInterface = {
    name: 'Basic Recipe',
    mainIngredient: 'flour'
};

export function recipesReducer(state = initialState, action: NewRecipeActions.NewRecipeActions): NewRecipeInterface {
    switch (action.type) {
        case (NewRecipeActions.NEW_RECIPE):
            return action.payload;
        default:
            return state;
    }
}

// export interface State extends NewCartItemInterface {
// }