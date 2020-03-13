import {NgModule} from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import { EnergyDrinksComponent } from './energy-drinks/energy-drinks.component';
import { EnergyDrinksItemComponent } from './energy-drinks/energy-drinks-item/energy-drinks-item.component';
import { LoginComponent } from '@ngrx-energy-drinks/ui-libraries';
import { WildcardComponent } from '@ngrx-energy-drinks/ui-libraries';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'wild', component: WildcardComponent },
  { path: 'energy-drinks', component: EnergyDrinksComponent },
  { path: 'energy-drinks/:id', component: EnergyDrinksItemComponent },
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: 'wild', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule {}
