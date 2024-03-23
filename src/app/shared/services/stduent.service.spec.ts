import { TestBed } from '@angular/core/testing';

import { StduentService } from './stduent.service';

describe('StduentService', () => {
  let service: StduentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StduentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
