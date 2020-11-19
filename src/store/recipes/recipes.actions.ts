import { Action } from 'redux';
import NewRecipeInterface from './recipes.interface';

export const NEW_RECIPE  = 'NEW_RECIPE';

export class NewRecipe implements Action {
    readonly type = NEW_RECIPE;
    constructor(public payload: NewRecipeInterface) {}
}

export type NewRecipeActions = NewRecipe;
