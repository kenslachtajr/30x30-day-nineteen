import { Component, Input, Output, EventEmitter } from '@angular/core';
import { EnergyDrink } from '@ngrx-energy-drinks/core-data';

@Component({
  selector: 'ngrx-energy-drinks-energy-drinks-list',
  templateUrl: './energy-drinks-list.component.html',
  styleUrls: ['./energy-drinks-list.component.css']
})
export class EnergyDrinksListComponent {
  @Input() energyDrinks: EnergyDrink[];
  @Input() readonly = false;
  @Output() selected = new EventEmitter();
  @Output() deleted = new EventEmitter();
}
