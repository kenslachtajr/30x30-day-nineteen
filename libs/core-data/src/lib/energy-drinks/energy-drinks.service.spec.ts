import { TestBed } from '@angular/core/testing';

import { EnergyDrinksService } from './energy-drinks.service';

describe('EnergyDrinksService', () => {
  let service: EnergyDrinksService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EnergyDrinksService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
