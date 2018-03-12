import { TestBed, inject } from '@angular/core/testing';

import { CrawfordPageTitleService } from './page-title.service';

describe('CrawfordPageTitleService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CrawfordPageTitleService]
    });
  });

  it('should be created', inject([CrawfordPageTitleService], (service: CrawfordPageTitleService) => {
    expect(service).toBeTruthy();
  }));
});
