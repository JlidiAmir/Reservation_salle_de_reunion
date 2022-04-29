import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccederHistoriqueComponent } from './acceder-historique.component';

describe('AccederHistoriqueComponent', () => {
  let component: AccederHistoriqueComponent;
  let fixture: ComponentFixture<AccederHistoriqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccederHistoriqueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccederHistoriqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
