import { Injectable } from '@angular/core';
import { IShoppingListService } from '../interfaces/shopping-list-service';

@Injectable()
export class ShoppingListService implements IShoppingListService {
  generateShoppingList() {
    throw new Error('Method not implemented.');
  }

  constructor() { }

}
