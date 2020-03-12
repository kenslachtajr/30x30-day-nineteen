import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnergyDrinksDetailsComponent } from './energy-drinks-details.component';

describe('EnergyDrinksDetailsComponent', () => {
  let component: EnergyDrinksDetailsComponent;
  let fixture: ComponentFixture<EnergyDrinksDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnergyDrinksDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnergyDrinksDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
