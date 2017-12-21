import { Injectable } from '@angular/core';
import { IRecipeService } from '../interfaces/recipe-service';
import { Recipe } from '../../models/recipe';

@Injectable()
export class RecipeService implements IRecipeService{
  addRecipe(recipe: Recipe) {
    throw new Error('Method not implemented.');
  }
  removeRecipe(recipe: Recipe) {
    throw new Error('Method not implemented.');
  }
  editRecipe(recipe: Recipe) {
    throw new Error('Method not implemented.');
  }
  getRecipe(recipe: Recipe) {
    throw new Error('Method not implemented.');
  }

  constructor() { }

}
