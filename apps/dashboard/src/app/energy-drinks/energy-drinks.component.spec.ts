import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnergyDrinksComponent } from './energy-drinks.component';

describe('EnergyDrinksComponent', () => {
  let component: EnergyDrinksComponent;
  let fixture: ComponentFixture<EnergyDrinksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnergyDrinksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnergyDrinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
