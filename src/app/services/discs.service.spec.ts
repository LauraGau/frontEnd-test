import { TestBed } from '@angular/core/testing';

import { DiscsService } from './discs.service';

describe('DiscsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DiscsService = TestBed.get(DiscsService);
    expect(service).toBeTruthy();
  });
});
