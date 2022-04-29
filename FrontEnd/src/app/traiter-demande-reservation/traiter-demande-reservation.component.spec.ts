import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TraiterDemandeReservationComponent } from './traiter-demande-reservation.component';

describe('TraiterDemandeReservationComponent', () => {
  let component: TraiterDemandeReservationComponent;
  let fixture: ComponentFixture<TraiterDemandeReservationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TraiterDemandeReservationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TraiterDemandeReservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
