import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NotifyService, EnergyDrink, emptyEnergyDrink } from '@ngrx-energy-drinks/core-data';
import { EnergyDrinksFacade } from '@ngrx-energy-drinks/core-state';
import { Observable } from 'rxjs';
@Component({
  selector: 'ngrx-energy-drinks',
  templateUrl: './energy-drinks.component.html',
  styleUrls: ['./energy-drinks.component.css']
})
export class EnergyDrinksComponent implements OnInit {
  form: FormGroup;
  selectedEnergyDrink$: Observable<EnergyDrink> = this.energyDrinksFacade.selectedEnergyDrink$;
  energyDrinks$: Observable<EnergyDrink[]> = this.energyDrinksFacade.allEnergyDrinks$;

  constructor(
    private energyDrinksFacade: EnergyDrinksFacade,
    private formbuilder: FormBuilder,
    private notify: NotifyService
  ) {}

  ngOnInit() {
    this.initForm();
    this.energyDrinksFacade.loadEnergyDrinks();
    this.energyDrinksFacade.mutations$.subscribe(() => this.resetEnergyDrink());
  }

  selectEnergyDrink(energyDrink: EnergyDrink) {
    this.energyDrinksFacade.selectEnergyDrink(energyDrink.id);
    this.form.patchValue(energyDrink);
  }

  resetEnergyDrink() {
    this.form.reset();
    this.selectEnergyDrink(emptyEnergyDrink);
    Object.keys(this.form.controls).forEach(key => {
      this.form.get(key).setErrors(null);
    });
  }

  createEnergyDrink() {
    this.notify.notification(`You have created ${this.form.value.title}`);
    this.energyDrinksFacade.createEnergyDrink(this.form.value);
  }

  cancel() {
    this.resetEnergyDrink();
    this.form.reset();
  }

  saveEnergyDrink(energyDrink: EnergyDrink) {
    if (energyDrink.id) {
      this.updateEnergyDrink();
    } else {
      this.createEnergyDrink();
    }
  }

  updateEnergyDrink() {
    this.notify.notification(`You have updated ${this.form.value.name}`);
    this.energyDrinksFacade.updateEnergyDrink(this.form.value);
  }

  deleteEnergyDrink(energyDrink: EnergyDrink) {
    this.notify.notification(`You have deleted ${energyDrink.name}`);
    this.energyDrinksFacade.deleteEnergyDrink(energyDrink);
  }

  private initForm() {
    this.form = this.formbuilder.group({
      id: null,
      type: ['', Validators.compose([Validators.required])],
      name: ['', Validators.compose([Validators.required])],
      fizzLevel: ''
    });
  }
}
