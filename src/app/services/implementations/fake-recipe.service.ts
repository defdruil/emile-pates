import { Injectable } from '@angular/core';
import { IRecipeService } from '../interfaces/recipe-service';
import { Recipe } from '../../models/recipe';

@Injectable()
export class FakeRecipeService implements IRecipeService {

  private recipes: Recipe[] = [];

  getAllRecipes(): Recipe[] {
    return this.recipes;
  }
  addRecipe(recipe: Recipe): void {
    recipe.id = this.getAvailableId();
    this.recipes.push(recipe);
  }
  removeRecipe(recipe: Recipe): void {
    this.recipes.splice(this.recipes.indexOf(this.getRecipeById(recipe.id)), 1);
  }
  editRecipe(recipe: Recipe): void {
    this.recipes[this.recipes.indexOf(this.getRecipeById(recipe.id))] = recipe;
  }
  getRecipeById(id: number): Recipe {
    let toReturn: Recipe;
    this.recipes.forEach((recipe: Recipe): void => {
      if (recipe.id === id) {
        toReturn = recipe;
      }
    });
    return toReturn;
  }

  private getAvailableId(): number {
    if (this.recipes.length === 0) {
      return 1;
    }
    return (this.recipes[this.recipes.length - 1 ].id) + 1;
  }

  constructor() { }

}
