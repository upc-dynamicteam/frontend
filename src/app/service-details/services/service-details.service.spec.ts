import { TestBed } from '@angular/core/testing';

import { ServiceDetailsService } from './service-details.service';

describe('ServicesService', () => {
    let service: ServiceDetailsService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(ServiceDetailsService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
