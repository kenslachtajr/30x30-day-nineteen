import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { EnergyDrinksComponent } from './energy-drinks/energy-drinks.component';
import { EnergyDrinksListComponent } from './energy-drinks/energy-drinks-list/energy-drinks-list.component';
import { EnergyDrinksItemComponent } from './energy-drinks/energy-drinks-item/energy-drinks-item.component';
import { EnergyDrinksDetailsComponent } from './energy-drinks/energy-drinks-details/energy-drinks-details.component';
import { WildComponent } from './wild/wild.component';

@NgModule({
  declarations: [AppComponent, EnergyDrinksComponent, EnergyDrinksListComponent, EnergyDrinksItemComponent, EnergyDrinksDetailsComponent, WildComponent],
  imports: [BrowserModule, NoopAnimationsModule, StoreModule.forRoot({}, {}), EffectsModule.forRoot([])],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
