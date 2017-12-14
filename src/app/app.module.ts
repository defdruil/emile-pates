import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MyFridgeComponent } from './content/my-fridge/my-fridge.component';
import { FakeFridgeService } from './services/implementations/fake-fridge.service';
import { FridgeService } from './services/interfaces/fridge-service';


@NgModule({
  declarations: [
    AppComponent,
    MyFridgeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [{provide: FridgeService, useClass: FakeFridgeService}],
  bootstrap: [AppComponent]
})
export class AppModule { }
