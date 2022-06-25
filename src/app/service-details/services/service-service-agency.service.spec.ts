import { TestBed } from '@angular/core/testing';

import { ServiceServiceAgencyService } from './service-service-agency.service';

describe('ServiceServiceAgencyService', () => {
  let service: ServiceServiceAgencyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceServiceAgencyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
