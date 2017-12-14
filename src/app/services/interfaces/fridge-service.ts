import { Ingredient } from '../../models/ingredient';

export interface FridgeService {
    addIngredient(ingredient: Ingredient);
}
