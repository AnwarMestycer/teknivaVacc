import { TestBed } from '@angular/core/testing';

import { EncoursService } from './encours.service';

describe('EncoursService', () => {
  let service: EncoursService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EncoursService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
