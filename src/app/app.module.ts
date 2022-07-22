import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateCustomerComponent } from './create-customer/create-customer.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { UpdateCustomerComponent } from './update-customer/update-customer.component';
import { CreateVegetableComponent } from './create-vegetable/create-vegetable.component';
import { VegetableDetailsComponent } from './vegetable-details/vegetable-details.component';
import { VegetableListComponent } from './vegetable-list/vegetable-list.component';
import { UpdateVegetableComponent } from './update-vegetable/update-vegetable.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateCustomerComponent,
    CustomerDetailsComponent,
    CustomerListComponent,
    UpdateCustomerComponent,
    CreateVegetableComponent,
    VegetableDetailsComponent,
    VegetableListComponent,
    UpdateVegetableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
