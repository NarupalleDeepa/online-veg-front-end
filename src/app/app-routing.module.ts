import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateCustomerComponent } from './create-customer/create-customer.component';
import { CreateVegetableComponent } from './create-vegetable/create-vegetable.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { UpdateCustomerComponent } from './update-customer/update-customer.component';
import { UpdateVegetableComponent } from './update-vegetable/update-vegetable.component';
import { VegetableDetailsComponent } from './vegetable-details/vegetable-details.component';
import { VegetableListComponent } from './vegetable-list/vegetable-list.component';

const routes: Routes = [
  {path: 'customers', component: CustomerListComponent},
  {path: 'create-customer', component:   CreateCustomerComponent},
 
  {path: '', redirectTo: 'customers', pathMatch: 'full'},
  {path: 'update-customer/:id', component:  UpdateCustomerComponent},
  {path: 'customer-details/:id', component:   CustomerDetailsComponent},

  {path: 'vegetables', component: VegetableListComponent},
  {path: 'create-vegetable', component:CreateVegetableComponent},
 
  {path: '', redirectTo: 'vegetables', pathMatch: 'full'},
  {path: 'update-vegetable/:id', component: UpdateVegetableComponent},
  {path: 'vegetable-details/:id', component: VegetableDetailsComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
