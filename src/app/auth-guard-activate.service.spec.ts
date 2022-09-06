import { TestBed } from '@angular/core/testing';

import { AuthGuardActivateService } from './auth-guard-activate.service';

describe('AuthGuardActivateService', () => {
  let service: AuthGuardActivateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthGuardActivateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
