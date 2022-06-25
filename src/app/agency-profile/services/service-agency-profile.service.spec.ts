import { TestBed } from '@angular/core/testing';

import { ServiceAgencyProfileService } from './service-agency-profile.service';

describe('ServiceAgencyProfileService', () => {
  let service: ServiceAgencyProfileService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceAgencyProfileService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
