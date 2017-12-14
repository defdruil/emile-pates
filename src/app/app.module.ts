import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MyFridgeComponent } from './content/my-fridge/my-fridge.component';
import { FakeFridgeService } from './services/implementations/fake-fridge.service';
import { FridgeService } from './services/interfaces/fridge-service';

import { NavbarComponent } from './components/common/navbar/navbar.component';
import { HeaderComponent } from './Components/Common/header/header.component';
import { FooterComponent } from './Components/Common/footer/footer.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';

@NgModule({
  declarations: [
    AppComponent,
    MyFridgeComponent
    NavbarComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot()
  ],
  providers: [{provide: FridgeService, useClass: FakeFridgeService}],
  bootstrap: [AppComponent]
})
export class AppModule { }
