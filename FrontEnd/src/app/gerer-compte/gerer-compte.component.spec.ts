import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GererCompteComponent } from './gerer-compte.component';

describe('GererCompteComponent', () => {
  let component: GererCompteComponent;
  let fixture: ComponentFixture<GererCompteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GererCompteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GererCompteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
