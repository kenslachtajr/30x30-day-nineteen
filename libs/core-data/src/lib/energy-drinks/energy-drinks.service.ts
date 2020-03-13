import { Injectable } from '@angular/core';
import { EnergyDrink } from './energy-drinks.model';
import { HttpClient } from '@angular/common/http';

const BASE_URL = 'https://kenneth-server.herokuapp.com';

@Injectable({
  providedIn: 'root'
})
export class EnergyDrinksService {
  model = 'drinks';

  constructor(private httpClient: HttpClient) {}

  getUrl() {
    return `${BASE_URL}/${this.model}`;
  }

  getUrlForId(id) {
    return `${this.getUrl()}/${id}`;
  }

  findOne(energyDrink: EnergyDrink) {
    return this.httpClient.get(this.getUrlForId(energyDrink));
  }

  all() {
    return this.httpClient.get(this.getUrl());
  }

  create(energyDrink: EnergyDrink) {
    return this.httpClient.post(this.getUrl(), energyDrink);
  }

  delete(energyDrink: EnergyDrink) {
    return this.httpClient.delete(this.getUrlForId(energyDrink.id));
  }

  update(energyDrink: EnergyDrink) {
    return this.httpClient.put(this.getUrlForId(energyDrink.id), energyDrink);
  }
}
