import { TestBed, inject } from '@angular/core/testing';

import { CrawfordPageBannerService } from './page-banner.service';

describe('CrawfordPageBannerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CrawfordPageBannerService]
    });
  });

  it('should be created', inject([CrawfordPageBannerService], (service: CrawfordPageBannerService) => {
    expect(service).toBeTruthy();
  }));
});
