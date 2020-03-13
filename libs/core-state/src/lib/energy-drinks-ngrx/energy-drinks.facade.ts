import { Injectable } from '@angular/core';
import { Action, select, Store, ActionsSubject } from '@ngrx/store';
import { filter } from 'rxjs/operators';

import * as fromEnergyDrinks from './energy-drinks.reducer';
import * as energyDrinksActions from './energy-drinks.actions';
import * as energyDrinksSelectors from './energy-drinks.selector';
import { EnergyDrink } from '@ngrx-energy-drinks/core-data';

@Injectable({
  providedIn: 'root'
})
export class EnergyDrinksFacade {
  allEnergyDrinks$ = this.store.pipe(
    select(energyDrinksSelectors.selectAllEnergyDrinks)
  );
  selectedEnergyDrink$ = this.store.pipe(
    select(energyDrinksSelectors.selectEnergyDrink)
  );
  energyDrinksLoading$ = this.store.pipe(
    select(energyDrinksSelectors.selectEnergyDrinksLoading)
  );
  mutations$ = this.actions$.pipe(
    filter(
      (action: Action) =>
        action.type === energyDrinksActions.createEnergyDrink({} as any).type ||
        action.type === energyDrinksActions.updateEnergyDrink({} as any).type ||
        action.type === energyDrinksActions.deleteEnergyDrink({} as any).type
    )
  );

  constructor(
    private actions$: ActionsSubject,
    private store: Store<fromEnergyDrinks.EnergyDrinksPartialState>
  ) {}

  selectEnergyDrink(selectedEnergyDrinkId: string | number) {
    this.dispatch(
      energyDrinksActions.energyDrinkSelected({ selectedEnergyDrinkId })
    );
  }

  loadEnergyDrinks() {
    this.dispatch(energyDrinksActions.loadEnergyDrinks());
  }

  loadEnergyDrink(energyDrink: EnergyDrink) {
    this.dispatch(energyDrinksActions.loadEnergyDrink({ energyDrink }));
  }

  createEnergyDrink(energyDrink: EnergyDrink) {
    this.dispatch(energyDrinksActions.createEnergyDrink({ energyDrink }));
  }

  updateEnergyDrink(energyDrink: EnergyDrink) {
    this.dispatch(energyDrinksActions.updateEnergyDrink({ energyDrink }));
  }

  deleteEnergyDrink(energyDrink: EnergyDrink) {
    this.dispatch(energyDrinksActions.deleteEnergyDrink({ energyDrink }));
  }

  private dispatch(action: Action) {
    this.store.dispatch(action);
  }
}
