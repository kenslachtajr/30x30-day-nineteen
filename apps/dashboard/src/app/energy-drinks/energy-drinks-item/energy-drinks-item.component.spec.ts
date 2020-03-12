import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnergyDrinksItemComponent } from './energy-drinks-item.component';

describe('EnergyDrinksItemComponent', () => {
  let component: EnergyDrinksItemComponent;
  let fixture: ComponentFixture<EnergyDrinksItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnergyDrinksItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnergyDrinksItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
