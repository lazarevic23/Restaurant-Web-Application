import { TestBed, inject } from '@angular/core/testing';

import { StoService } from './sto.service';

describe('StoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StoService]
    });
  });

  it('should be created', inject([StoService], (service: StoService) => {
    expect(service).toBeTruthy();
  }));
});
