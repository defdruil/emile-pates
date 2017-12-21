import { Injectable } from '@angular/core';
import { IIngredientService } from '../interfaces/ingredient-service';
import { Ingredient } from '../../models/ingredient';

@Injectable()
export class IngredientService implements IIngredientService {
  addIngredient(ingredient: Ingredient) {
    throw new Error('Method not implemented.');
  }
  removeIngredient(ingredient: Ingredient) {
    throw new Error('Method not implemented.');
  }
  editIngredient(ingredient: Ingredient) {
    throw new Error('Method not implemented.');
  }
  getIngredientById(id: number) {
    throw new Error('Method not implemented.');
  }
  getIngredientByName(name: string) {
    throw new Error('Method not implemented.');
  }

  constructor() { }

}
