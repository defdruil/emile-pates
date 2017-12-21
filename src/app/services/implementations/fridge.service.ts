import { Injectable } from '@angular/core';
import { Ingredient } from '../../models/ingredient';
import { IFridgeService } from '../interfaces/fridge-service';

@Injectable()
export class FridgeService implements IFridgeService {

    addIngredient(ingredient: Ingredient) {
      throw Error('Not implemented');
    }

    removeIngredient(ingredient: Ingredient) {
      return {};
    }

    constructor() { }

}
