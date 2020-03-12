import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnergyDrinksListComponent } from './energy-drinks-list.component';

describe('EnergyDrinksListComponent', () => {
  let component: EnergyDrinksListComponent;
  let fixture: ComponentFixture<EnergyDrinksListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnergyDrinksListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnergyDrinksListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
