import { Ingredient } from '../../models/ingredient';

export interface IIngredientService {
    addIngredient(ingredient: Ingredient);

    removeIngredient(ingredient: Ingredient);

    editIngredient(ingredient: Ingredient);

    getIngredientById(id: number);

    getIngredientByName(name: string);
}
