import { TestBed } from '@angular/core/testing';

import { GlobaldataService } from './globaldata.service';

describe('GlobaldataService', () => {
  let service: GlobaldataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GlobaldataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
