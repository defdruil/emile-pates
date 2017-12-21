import { Injectable } from '@angular/core';
import { IFridgeService } from '../interfaces/fridge-service';
import { Ingredient } from '../../models/ingredient';

@Injectable()
export class FakeFridgeService implements IFridgeService {

  removeIngredient(ingredient: Ingredient) {
    console.log('Supression');
  }

  addIngredient(ingredient: Ingredient) {
    console.log('ajout');
  }

  constructor() { }

}
