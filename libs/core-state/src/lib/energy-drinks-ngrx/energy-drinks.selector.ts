import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  ENERGY_DRINKS_FEATURE_KEY,
  energyDrinksAdapter,
  EnergyDrinksPartialState,
  EnergyDrinksState
} from './energy-drinks.reducer';

export const selectEnergyDrinksState = createFeatureSelector<
  EnergyDrinksPartialState,
  EnergyDrinksState
>(ENERGY_DRINKS_FEATURE_KEY);

const { selectAll, selectEntities } = energyDrinksAdapter.getSelectors();

export const selectEnergyDrinksLoading = createSelector(
  selectEnergyDrinksState,
  (state: EnergyDrinksState) => selectAll(state)
);

export const selectAllEnergyDrinks = createSelector(
  selectEnergyDrinksState,
  (state: EnergyDrinksState) => selectAll(state)
);

export const selectEnergyDrinksEntities = createSelector(
  selectEnergyDrinksState,
  (state: EnergyDrinksState) => selectEntities(state)
);

export const selectEnergyDrinkId = createSelector(
  selectEnergyDrinksState,
  (state: EnergyDrinksState) => state.selectedEnergyDrinkId
);

export const selectEnergyDrink = createSelector(
  selectEnergyDrinksEntities,
  selectEnergyDrinkId,
  (entities, selectedId) => selectedId && entities[selectedId]
);
