import { TestBed } from '@angular/core/testing';

import { PersonaldetailsService } from './personaldetails.service';

describe('PersonaldetailsService', () => {
  let service: PersonaldetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PersonaldetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
