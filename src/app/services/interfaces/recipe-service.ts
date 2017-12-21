import {Recipe } from '../../models/recipe';

export interface IRecipeService {
    addRecipe(recipe: Recipe);

    removeRecipe(recipe: Recipe);

    editRecipe(recipe: Recipe);

    getRecipe(recipe: Recipe);
}
