import { Injectable } from '@angular/core';
import { IShoppingListService } from '../interfaces/shopping-list-service';
import { Ingredient } from '../../models/ingredient';

@Injectable()
export class ShoppingListService implements IShoppingListService {
  getShoppingList(): Ingredient[] {
    throw new Error('Method not implemented.');
  }

  constructor() { }

}
