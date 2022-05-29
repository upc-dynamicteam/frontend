import { TestBed } from '@angular/core/testing';

import { ServiceProfileTouristService } from './service-profile-tourist.service';

describe('ServiceProfileTouristService', () => {
  let service: ServiceProfileTouristService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceProfileTouristService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
