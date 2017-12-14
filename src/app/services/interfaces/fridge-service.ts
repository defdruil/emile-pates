import { Injectable } from '@angular/core';
import { Ingredient } from '../../models/ingredient';

@Injectable
export interface FridgeService {
    addIngredient(ingredient: Ingredient);
}
