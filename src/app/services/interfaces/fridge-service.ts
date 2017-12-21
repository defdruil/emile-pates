import { Ingredient } from '../../models/ingredient';

export interface IFridgeService {
    addIngredient(ingredient: Ingredient);

    removeIngredient(ingredient: Ingredient);
}
