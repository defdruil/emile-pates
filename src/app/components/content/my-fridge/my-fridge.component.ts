import { Component, OnInit, Inject } from '@angular/core';
import { Ingredient } from '../../../models/ingredient';
import { FridgeService } from '../../../services/interfaces/fridge-service';

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
  constructor(@Inject('FridgeService') private fridgeService: FridgeService) {
  }

  ngOnInit() {
    let ingredient: Ingredient;
    ingredient = {id: this.id, name: this.name, quantity: this.quantity, unity: this.unity, peremptionDate: this.peremptionDate};
    // this.ingredientList.push(ingredient);
    this.fridgeService.addIngredient(ingredient);
  }

  addIngredient(event: Event): void {
    let ingredient: Ingredient;
    ingredient = {id: this.id, name: this.name, quantity: this.quantity, unity: this.unity, peremptionDate: this.peremptionDate};
    // this.ingredientList.push(ingredient);
    this.fridgeService.addIngredient(ingredient);
  }

}
