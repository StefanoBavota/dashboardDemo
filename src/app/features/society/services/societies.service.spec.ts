import { TestBed } from '@angular/core/testing';

import { SocietiesService } from './societies.service';

describe('SocietiesService', () => {
  let service: SocietiesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SocietiesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
