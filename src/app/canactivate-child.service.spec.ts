import { TestBed } from '@angular/core/testing';

import { CanactivateChildService } from './canactivate-child.service';

describe('CanactivateChildService', () => {
  let service: CanactivateChildService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CanactivateChildService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
