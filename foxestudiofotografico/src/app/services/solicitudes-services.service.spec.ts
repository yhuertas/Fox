import { TestBed } from '@angular/core/testing';

import { SolicitudesServicesService } from './solicitudes-services.service';

describe('SolicitudesServicesService', () => {
  let service: SolicitudesServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SolicitudesServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
