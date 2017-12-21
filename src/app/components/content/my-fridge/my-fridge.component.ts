import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { Ingredient } from '../../../models/ingredient';
import { FridgeService } from '../../../services/implementations/fridge.service';

import { ModalDirective } from 'ngx-bootstrap/modal';
import _ from 'lodash';

@Component({
  selector: 'app-my-fridge',
  templateUrl: './my-fridge.component.html',
  styleUrls: ['./my-fridge.component.css']
})
export class MyFridgeComponent implements OnInit {
  id: number;
  name: string;
  quantity: number;
  unity: string;
  peremptionDate: Date;

  ingredientList: Ingredient[];
  ingredientToEdit: Ingredient;

  @ViewChild('editModal')
  editModal: ModalDirective;

  constructor(private fridgeService: FridgeService) {
  }

  ngOnInit() {
    this.getIngredients();
  }

  addIngredient(event: Event): void {
    let ingredient: Ingredient;
    ingredient = {id: this.id, name: this.name, quantity: this.quantity, unity: this.unity, peremptionDate: this.peremptionDate};
    this.fridgeService.addIngredient(ingredient);
  }

  prepareForEditIngredient(ingredient: Ingredient): void {
    this.ingredientToEdit = _.clone(ingredient);
    const name: string = this.ingredientToEdit.name;
    this.editModal.show();
  }

  editIngredient(ingredient: Ingredient): void {
    this.fridgeService.editIngredient(ingredient);
    this.editModal.hide();
  }

  getIngredients(): Ingredient[] {
    this.ingredientList = this.fridgeService.getFridgeIngredients();
    return this.ingredientList;
  }

  removeIngredient(ingredient: Ingredient): void {
    this.fridgeService.removeIngredient(ingredient);
  }

}
