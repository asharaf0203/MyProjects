import { TestBed, inject } from '@angular/core/testing';

import { CrawfordBreadcrumbService } from './breadcrumb.service';

describe('BreadcrumbService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CrawfordBreadcrumbService]
    });
  });

  it('should be created', inject([CrawfordBreadcrumbService], (service: CrawfordBreadcrumbService) => {
    expect(service).toBeTruthy();
  }));
});
