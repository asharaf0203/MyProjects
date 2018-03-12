import { TestBed, inject } from '@angular/core/testing';

import { CrawfordPageHeaderService } from './page-header.service';

describe('CrawfordPageHeaderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CrawfordPageHeaderService]
    });
  });

  it('should be created', inject([CrawfordPageHeaderService], (service: CrawfordPageHeaderService) => {
    expect(service).toBeTruthy();
  }));
});
