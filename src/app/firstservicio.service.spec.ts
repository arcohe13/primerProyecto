import { TestBed } from '@angular/core/testing';

import { FirstservicioService } from './firstservicio.service';

describe('FirstservicioService', () => {
  let service: FirstservicioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FirstservicioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
