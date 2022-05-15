import { TestBed } from '@angular/core/testing';

import { DakarService } from './dakar.service';

describe('DakarService', () => {
  let service: DakarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DakarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
