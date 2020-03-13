import { createAction, props } from '@ngrx/store';
import { EnergyDrink } from '@ngrx-energy-drinks/core-data';

export const energyDrinkSelected = createAction(
  '[ENERGYDRINK] Energy Drink Selected',
  props<{selectedEnergyDrinkId: string | number}>()
);

export const loadEnergyDrinks = createAction(
  '[ENERGYDRINK] Load Energy Drinks',
);

export const energyDrinksLoaded = createAction(
  '[ENERGYDRINK] Energy Drinks Loaded',
  props<{ energyDrinks: EnergyDrink[] }>()
);

export const loadEnergyDrink = createAction(
  '[ENERGYDRINK] Load Energy Drink',
  props<{ energyDrink: EnergyDrink }>()
);

export const energyDrinkLoaded = createAction(
  '[ENERGYDRINK] Energy Drink Loaded',
  props<{ energyDrink: EnergyDrink }>()
);

export const createEnergyDrink = createAction(
  '[ENERGYDRINK] Create Energy Drink',
  props<{ energyDrink: EnergyDrink }>()
);

export const energyDrinkCreated = createAction(
  '[ENERGYDRINK] Energy Drink Created',
  props<{ energyDrink: EnergyDrink }>()
);

export const updateEnergyDrink = createAction(
  '[ENERGYDRINK] Update Energy Drink',
  props<{ energyDrink: EnergyDrink }>()
);

export const energyDrinkUpdated = createAction(
  '[ENERGYDRINK] Energy Drink Updated',
  props<{ energyDrink: EnergyDrink }>()
);

export const deleteEnergyDrink = createAction(
  '[ENERGYDRINK] Delete Energy Drink',
  props<{ energyDrink: EnergyDrink }>()
);

export const energyDrinkDeleted = createAction(
  '[ENERGYDRINK] Energy Drink Deleted',
  props<{ energyDrink: EnergyDrink }>()
);
