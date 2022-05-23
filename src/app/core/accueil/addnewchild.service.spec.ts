import { TestBed } from '@angular/core/testing';

import { AddnewchildService } from './addnewchild.service';

describe('AddnewchildService', () => {
  let service: AddnewchildService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddnewchildService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
