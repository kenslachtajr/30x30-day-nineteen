import { EnergyDrink } from '@ngrx-energy-drinks/core-data';
import { Component, Output, Input, EventEmitter } from '@angular/core';
@Component({
  selector: 'ngrx-energy-drinks-energy-drinks-details',
  templateUrl: './energy-drinks-details.component.html',
  styleUrls: ['./energy-drinks-details.component.css']
})
export class EnergyDrinksDetailsComponent {
  currentEnergyDrink: EnergyDrink;
  originalTitle;
  @Input() set energyDrink(value) {
    if (value) this.originalTitle = value.title;
    this.currentEnergyDrink = Object.assign({}, value);
  }

  @Input() form;
  @Output() saved = new EventEmitter();
  @Output() cancelled = new EventEmitter();
}
