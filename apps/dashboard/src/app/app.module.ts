import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { EnergyDrinksComponent } from './energy-drinks/energy-drinks.component';
import { EnergyDrinksListComponent } from './energy-drinks/energy-drinks-list/energy-drinks-list.component';
import { EnergyDrinksItemComponent } from './energy-drinks/energy-drinks-item/energy-drinks-item.component';
import { EnergyDrinksDetailsComponent } from './energy-drinks/energy-drinks-details/energy-drinks-details.component';

@NgModule({
  declarations: [AppComponent, EnergyDrinksComponent, EnergyDrinksListComponent, EnergyDrinksItemComponent, EnergyDrinksDetailsComponent],
  imports: [BrowserModule, StoreModule.forRoot({}, {}), EffectsModule.forRoot([])],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
