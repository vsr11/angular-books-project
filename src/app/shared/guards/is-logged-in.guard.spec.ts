import { TestBed } from '@angular/core/testing';

import { isLoggedInGuard } from './is-logged-in.guard';

describe('isLoggedInGuard', () => {
  let guard: isLoggedInGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(isLoggedInGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
