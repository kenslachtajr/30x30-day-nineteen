import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/angular';
import { map } from 'rxjs/operators';

import * as energyDrinksActions from './energy-drinks.actions';
import { EnergyDrinksFacade } from './energy-drinks.facade';
import {
  EnergyDrink,
  EnergyDrinksService,
  NotifyService
} from '@ngrx-energy-drinks/core-data';
import { EnergyDrinksPartialState } from './energy-drinks.reducer';

@Injectable()
export class EnergyDrinksEffects {
  loadEnergyDrinks$ = createEffect(() =>
    this.dataPersistence.fetch(energyDrinksActions.loadEnergyDrinks, {
      run: (
        action: ReturnType<typeof energyDrinksActions.loadEnergyDrinks>,
        state: EnergyDrinksPartialState
      ) => {
        return this.energyDrinksService
          .all()
          .pipe(
            map((energyDrinks: EnergyDrink[]) =>
              energyDrinksActions.energyDrinksLoaded({ energyDrinks })
            )
          );
      },
      onError: (
        action: ReturnType<typeof energyDrinksActions.loadEnergyDrinks>,
        error
      ) => {
        this.notify.notification('Effect Load All Error', error);
      }
    })
  );

  loadEnergyDrink$ = createEffect(() =>
    this.dataPersistence.fetch(energyDrinksActions.loadEnergyDrink, {
      run: (
        action: ReturnType<typeof energyDrinksActions.loadEnergyDrink>,
        state: EnergyDrinksPartialState
      ) => {
        return this.energyDrinksService
          .findOne(action.energyDrink)
          .pipe(
            map((energyDrink: EnergyDrink) =>
              energyDrinksActions.energyDrinkLoaded({ energyDrink })
            )
          );
      },
      onError: (
        action: ReturnType<typeof energyDrinksActions.loadEnergyDrink>,
        error
      ) => {
        this.notify.notification('Effect Load Error', error);
      }
    })
  );

  selectEnergyDrinkOnLoad$ = createEffect(() =>
    this.dataPersistence.actions.pipe(
      ofType(energyDrinksActions.energyDrinkLoaded),
      map(({ energyDrink }) =>
        energyDrinksActions.energyDrinkSelected({
          selectedEnergyDrinkId: energyDrink.id
        })
      )
    )
  );

  createEnergyDrink$ = createEffect(() =>
    this.dataPersistence.pessimisticUpdate(
      energyDrinksActions.createEnergyDrink,
      {
        run: (
          action: ReturnType<typeof energyDrinksActions.createEnergyDrink>,
          state: EnergyDrinksPartialState
        ) => {
          return this.energyDrinksService
            .create(action.energyDrink)
            .pipe(
              map((energyDrink: EnergyDrink) =>
                energyDrinksActions.energyDrinkCreated({ energyDrink })
              )
            );
        },
        onError: (
          action: ReturnType<typeof energyDrinksActions.createEnergyDrink>,
          error
        ) => {
          this.notify.notification('Effect Create Error', error);
        }
      }
    )
  );

  updateEnergyDrink$ = createEffect(() =>
    this.dataPersistence.pessimisticUpdate(
      energyDrinksActions.updateEnergyDrink,
      {
        run: (
          action: ReturnType<typeof energyDrinksActions.updateEnergyDrink>,
          state: EnergyDrinksPartialState
        ) => {
          return this.energyDrinksService
            .update(action.energyDrink)
            .pipe(
              map((energyDrink: EnergyDrink) =>
                energyDrinksActions.energyDrinkUpdated({ energyDrink })
              )
            );
        },
        onError: (
          action: ReturnType<typeof energyDrinksActions.updateEnergyDrink>,
          error
        ) => {
          this.notify.notification('Effect Update Error', error);
        }
      }
    )
  );

  deleteEnergyDrinks$ = createEffect(() =>
    this.dataPersistence.pessimisticUpdate(
      energyDrinksActions.deleteEnergyDrink,
      {
        run: (
          action: ReturnType<typeof energyDrinksActions.deleteEnergyDrink>,
          state: EnergyDrinksPartialState
        ) => {
          return this.energyDrinksService
            .delete(action.energyDrink)
            .pipe(
              map(() =>
                energyDrinksActions.energyDrinkDeleted({
                  energyDrink: action.energyDrink
                })
              )
            );
        },
        onError: (
          action: ReturnType<typeof energyDrinksActions.deleteEnergyDrink>,
          error
        ) => {
          this.notify.notification('Effect Delete Error', error);
        }
      }
    )
  );

  constructor(
    private actions$: Actions,
    private dataPersistence: DataPersistence<EnergyDrinksPartialState>,
    private energyDrinksService: EnergyDrinksService,
    private energyDrinksFacade: EnergyDrinksFacade,
    private notify: NotifyService
  ) {}
}
