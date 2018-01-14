import { Component, OnInit, ViewChild } from '@angular/core';
import { Ingredient } from '../../../models/ingredient';
import { ShoppingList } from '../../../models/shopping-list';
import { FridgeService } from '../../../services/implementations/fridge.service';
import { ShoppingListService} from '../../../services/implementations/shopping-list.service';
import { IngredientService } from '../../../services/implementations/ingredient.service';
import { ModalDirective } from 'ngx-bootstrap/modal';

import _ from 'lodash';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  shoppingListToEdit: ShoppingList;
  myShoppingsList: ShoppingList[];
  ingredientsToAdd: Ingredient[];

  newIngredient: Ingredient;

  @ViewChild('confirmModal')
  confirmModal: ModalDirective;
  @ViewChild('addIngredientModal')
  addIngredientModal: ModalDirective;

  constructor(private ingredientService: IngredientService,
    private fridgeService: FridgeService,
    private shoppingListService: ShoppingListService) { }

  ngOnInit() {
    this.shoppingListToEdit = null;
    this.getMyShoppingList();
    const d = new Date();
    d.setDate(d.getDate() + 14);
    this.newIngredient = {id: 0, name: '', quantity: 0, unity: '', peremptionDate: d};
  }

  getMyShoppingList(): void {
    this.myShoppingsList = this.shoppingListService.getShoppingList();
  }

  prepareForEditShoppingList(shopping: ShoppingList): void {
    this.ingredientsToAdd = [];
    this.shoppingListToEdit = shopping;
  }

  selectIngredient(e, ingredient) {
    if (e.target.checked) {
      this.ingredientsToAdd.push(ingredient);
    }else {
      this.ingredientsToAdd.splice(this.ingredientsToAdd.indexOf(ingredient), 1);
    }
  }

  prepareForAddIngredient(): void {
    const d = new Date();
    d.setDate(d.getDate() + 14);
    this.newIngredient = {id: 0, name: '', quantity: 0, unity: '', peremptionDate: d};
    this.addIngredientModal.show();
  }

  addIngredient(ingredient: Ingredient): void {
    this.shoppingListToEdit.ingredientList.push(ingredient);
    this.addIngredientModal.hide();
  }

  deleteIngredient(ingredient: Ingredient): void {
    this.shoppingListToEdit.ingredientList.splice(this.shoppingListToEdit.ingredientList.indexOf(ingredient), 1);
  }

  showValidation() {
    this.confirmModal.show();
  }

  deleteShoppingList(shoppingList: ShoppingList): void {
    this.shoppingListService.removeShoppingList(shoppingList);
    this.confirmModal.hide();
  }
  addIngredientsToFridge(): void {
    for (let i = 0; i < this.ingredientsToAdd.length; i++) {
      this.fridgeService.addIngredient(this.ingredientsToAdd[i]);
      this.shoppingListToEdit.ingredientList.splice(this.shoppingListToEdit.ingredientList.indexOf(this.ingredientsToAdd[i]), 1);
    }
    this.confirmModal.hide();
  }

  addAllIngredientsToFridge(): void {
    for (let i = 0; i < this.shoppingListToEdit.ingredientList.length; i++) {
      this.fridgeService.addIngredient(this.shoppingListToEdit.ingredientList[i]);
    }
    this.shoppingListService.removeShoppingList(this.shoppingListToEdit);
    this.shoppingListToEdit = null;
    this.confirmModal.hide();
  }
  editShoppingList(shoppingList: ShoppingList): void {
    this.shoppingListService.editShoppingList(shoppingList);
    this.confirmModal.hide();
  }
}
