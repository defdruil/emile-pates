import { Injectable } from '@angular/core';
import { IFridgeService } from '../interfaces/fridge-service';
import { Ingredient } from '../../models/ingredient';

@Injectable()
export class FakeFridgeService implements IFridgeService {
 private ingredientsList: Ingredient[] = [];
 private newId = 1;

  removeIngredient(ingredient: Ingredient): void {
    this.ingredientsList.splice(this.ingredientsList.indexOf(this.getIngredientById(ingredient.id)), 1);
  }

  addIngredient(ingredient: Ingredient): void {
    ingredient.id = this.newId;
    this.ingredientsList.push(ingredient);
    this.newId ++;
  }

  getFridgeIngredients(): Ingredient[] {
    return this.ingredientsList;
  }

  editIngredient(ingredient: Ingredient): void {
    this.ingredientsList[this.ingredientsList.indexOf(this.getIngredientById(ingredient.id))] = ingredient;
  }

  getIngredientById(id: number): Ingredient {
    let toReturn: Ingredient;
    this.ingredientsList.forEach((ingredient: Ingredient): void => {
      if (ingredient.id === id) {
        toReturn = ingredient;
      }
    });
    return toReturn;
  }

  constructor() {
    const d = new Date('January 01, 2018');
    const d2 = new Date('February 02, 2017');
    const d3 = new Date('June 12, 2015');
    const beurre: Ingredient = {id: 0, name: 'beurre', quantity: 250, unity: 'g', peremptionDate: d};
    const pates: Ingredient = {id: 1, name: 'pates', quantity: 500, unity: 'g', peremptionDate: d};
    const creme: Ingredient = {id: 2, name: 'creme fraiche', quantity: 25, unity: 'cl', peremptionDate: d2};
    const lardons: Ingredient = {id: 3, name: 'lardons', quantity: 250, unity: 'g', peremptionDate: d3};

    this.ingredientsList.push(beurre, pates, creme, lardons);
  }
}
