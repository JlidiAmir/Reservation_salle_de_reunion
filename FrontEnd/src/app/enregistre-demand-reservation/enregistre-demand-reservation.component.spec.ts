import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnregistreDemandReservationComponent } from './enregistre-demand-reservation.component';

describe('EnregistreDemandReservationComponent', () => {
  let component: EnregistreDemandReservationComponent;
  let fixture: ComponentFixture<EnregistreDemandReservationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnregistreDemandReservationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnregistreDemandReservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
