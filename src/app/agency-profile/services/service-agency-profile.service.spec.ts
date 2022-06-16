import { TestBed } from '@angular/core/testing';

import { ServiceAgencyProfileService } from './service-agency-profile.service';

describe('AgencyProfileService', () => {
  let service: ServiceAgencyProfileService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceAgencyProfileService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
