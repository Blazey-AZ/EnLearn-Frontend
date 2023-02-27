import { TestBed } from '@angular/core/testing';

import { FaithService } from './faith.service';

describe('FaithService', () => {
  let service: FaithService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FaithService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
