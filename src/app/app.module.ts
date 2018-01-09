import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { MyFridgeComponent } from './components/content/my-fridge/my-fridge.component';
import { FakeFridgeService } from './services/implementations/fake-fridge.service';
import { FridgeService } from './services/implementations/fridge.service';

import { NavbarComponent } from './components/common/navbar/navbar.component';
import { HeaderComponent } from './Components/Common/header/header.component';
import { FooterComponent } from './Components/Common/footer/footer.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { IngredientService } from './services/implementations/ingredient.service';
import { FakeIngredientService } from './services/implementations/fake-ingredient.service';
import { PlanningService } from './services/implementations/planning.service';
import { FakePlanningService } from './services/implementations/fake-planning.service';
import { RecipeService } from './services/implementations/recipe.service';
import { FakeRecipeService } from './services/implementations/fake-recipe.service';
import { RouterModule } from '@angular/router';
import { ShoppingListComponent } from './components/content/shopping-list/shopping-list.component';
import { PlanningComponent } from './components/content/planning/planning.component';
import { RecipeComponent } from './components/content/recipe/recipe.component';
const appRoutes: Routes = [
  { path: '', component: MyFridgeComponent },
  { path: 'shopping-list', component: ShoppingListComponent},
  { path: 'recipes', component: RecipeComponent},
  { path: 'planning', component: PlanningComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    MyFridgeComponent,
    ShoppingListComponent,
    RecipeComponent,
    PlanningComponent,
    NavbarComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    {provide: FridgeService, useClass: FakeFridgeService},
    {provide: IngredientService, useClass: FakeIngredientService},
    {provide: PlanningService, useClass: FakePlanningService},
    {provide: RecipeService, useClass: FakeRecipeService}
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
