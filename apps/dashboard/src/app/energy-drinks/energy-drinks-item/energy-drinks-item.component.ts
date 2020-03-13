import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EnergyDrinksService } from '@ngrx-energy-drinks/core-data';

@Component({
  selector: 'ngrx-energy-drinks-energy-drinks-item',
  templateUrl: './energy-drinks-item.component.html',
  styleUrls: ['./energy-drinks-item.component.css']
})
export class EnergyDrinksItemComponent implements OnInit {
  _energyDrink$;
  public get energyDrink$() {
    return this._energyDrink$;
  }
  public set energyDrink$(value) {
    this._energyDrink$ = value;
  }

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private energyDrinkService: EnergyDrinksService
  ) {}

  ngOnInit() {
    this.route.params.subscribe(param => {
      const id = param['id'];
      this.energyDrink$ = this.energyDrinkService.findOne(id);
    });
  }

  goBackToEnergyDrinks() {
    this.router.navigate(['/energy-drinks']);
  }
}
