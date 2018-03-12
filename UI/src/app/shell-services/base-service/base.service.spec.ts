import { TestBed, inject } from '@angular/core/testing';

import { CrawfordBaseService } from './base.service';

describe('CrawfordBaseService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CrawfordBaseService]
    });
  });

  it('should be created', inject([CrawfordBaseService], (service: CrawfordBaseService<any>) => {
    expect(service).toBeTruthy();
  }));
});
