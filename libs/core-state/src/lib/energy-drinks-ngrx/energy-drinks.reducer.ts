import { Action, createReducer, on } from '@ngrx/store';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';

import * as energyDrinksActions from './energy-drinks.actions';
import { EnergyDrink } from '@ngrx-energy-drinks/core-data';

export const ENERGY_DRINKS_FEATURE_KEY = 'energyDrinks';

export interface EnergyDrinksState extends EntityState<EnergyDrink> {
  selectedEnergyDrinkId?: string | number;
  isLoading: boolean;
}

export interface EnergyDrinksPartialState {
  readonly [ENERGY_DRINKS_FEATURE_KEY]: EnergyDrinksState;
}

export const energyDrinksAdapter: EntityAdapter<
  EnergyDrink
> = createEntityAdapter<EnergyDrink>();

export const initialState: EnergyDrinksState = energyDrinksAdapter.getInitialState(
  {
    selectedEnergyDrinkId: null,
    isLoading: false
  }
);

const energyDrinksReducer = createReducer(
  initialState,
  on(
    energyDrinksActions.energyDrinkSelected,
    (state, { selectedEnergyDrinkId }) =>
      Object.assign({}, state, { selectedEnergyDrinkId })
  ),
  on(energyDrinksActions.energyDrinksLoaded, (state, { energyDrinks }) =>
    energyDrinksAdapter.setAll(energyDrinks, { ...state, isLoading: false })
  ),
  on(energyDrinksActions.energyDrinkCreated, (state, { energyDrink }) =>
    energyDrinksAdapter.addOne(energyDrink, { ...state, isLoading: false })
  ),
  on(energyDrinksActions.energyDrinkUpdated, (state, { energyDrink }) =>
    energyDrinksAdapter.upsertOne(energyDrink, { ...state, isLoading: false })
  ),
  on(energyDrinksActions.energyDrinkDeleted, (state, { energyDrink }) =>
    energyDrinksAdapter.removeOne(energyDrink.id, {
      ...state,
      isLoading: false
    })
  ),
  on(
    energyDrinksActions.loadEnergyDrinks,
    energyDrinksActions.createEnergyDrink,
    energyDrinksActions.updateEnergyDrink,
    energyDrinksActions.deleteEnergyDrink,
    state => ({
      ...state,
      isLoading: true
    })
  )
);

export function reducer(state: EnergyDrinksState | undefined, action: Action) {
  return energyDrinksReducer(state, action);
}
