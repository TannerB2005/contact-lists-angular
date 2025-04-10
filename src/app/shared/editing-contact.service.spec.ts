import { TestBed } from '@angular/core/testing';

import { EditingContactService } from './editing-contact.service';

describe('EditingContactService', () => {
  let service: EditingContactService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EditingContactService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
