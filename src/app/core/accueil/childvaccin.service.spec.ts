import { TestBed } from '@angular/core/testing';

import { ChildvaccinService } from './childvaccin.service';

describe('ChildvaccinService', () => {
  let service: ChildvaccinService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChildvaccinService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
