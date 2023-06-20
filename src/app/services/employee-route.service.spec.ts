import { TestBed } from '@angular/core/testing';

import { EmployeeRouteService } from './employee-route.service';

describe('EmployeeRouteService', () => {
  let service: EmployeeRouteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmployeeRouteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
