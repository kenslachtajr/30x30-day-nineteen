import { ActionReducerMap } from '@ngrx/store';
import * as fromEnergyDrinks from './energy-drinks-ngrx/energy-drinks.reducer';

export interface AppState {
  energyDrinks: fromEnergyDrinks.EnergyDrinksState;
}

export const reducers: ActionReducerMap<AppState> = {
  energyDrinks: fromEnergyDrinks.reducer
};

export const defaultState: AppState = {
  energyDrinks: { ids: [] } as fromEnergyDrinks.EnergyDrinksState
};
