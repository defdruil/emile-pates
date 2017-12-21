import { Ingredient } from '../../models/ingredient';

export interface IShoppingListService {
    getShoppingList(): Ingredient[];
}
