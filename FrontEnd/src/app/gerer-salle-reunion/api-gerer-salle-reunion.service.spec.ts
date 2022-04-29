import { TestBed } from '@angular/core/testing';

import { ApiGererSalleReunionService } from './api-gerer-salle-reunion.service';

describe('ApiGererSalleReunionService', () => {
  let service: ApiGererSalleReunionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiGererSalleReunionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
