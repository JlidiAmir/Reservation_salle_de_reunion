import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GererSalleReunionComponent } from './gerer-salle-reunion.component';

describe('GererSalleReunionComponent', () => {
  let component: GererSalleReunionComponent;
  let fixture: ComponentFixture<GererSalleReunionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GererSalleReunionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GererSalleReunionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
