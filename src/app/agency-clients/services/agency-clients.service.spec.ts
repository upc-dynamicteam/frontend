import { TestBed } from '@angular/core/testing';

import { AgencyClientsService } from './agency-clients.service';

describe('AgencyClientsService', () => {
  let service: AgencyClientsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AgencyClientsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
