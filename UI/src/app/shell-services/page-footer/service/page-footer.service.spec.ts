import { TestBed, inject } from '@angular/core/testing';

import { CrawfordPageFooterService } from './page-footer.service';

describe('CrawfordPageFooterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CrawfordPageFooterService]
    });
  });

  it('should be created', inject([CrawfordPageFooterService], (service: CrawfordPageFooterService) => {
    expect(service).toBeTruthy();
  }));
});
