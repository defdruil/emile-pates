import { Injectable } from '@angular/core';
import { FridgeService } from '../interfaces/fridge-service';
import { Ingredient } from '../../models/ingredient';

@Injectable()
export class FakeFridgeService implements FridgeService {

  addIngredient(ingredient: Ingredient) {
    console.log('ajout');
  }

  constructor() { }

}
