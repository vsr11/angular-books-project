import { TestBed } from '@angular/core/testing';

import { isAdminGuard } from './is-admin.guard';

describe('isAdminGuard', () => {
  let guard: isAdminGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(isAdminGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
