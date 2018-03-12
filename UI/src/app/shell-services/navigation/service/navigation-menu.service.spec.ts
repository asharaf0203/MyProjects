import { TestBed, inject } from '@angular/core/testing';

import { CrawfordNavigationMenuService } from './navigation-menu.service';

describe('CrawfordNavigationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CrawfordNavigationMenuService]
    });
  });

  it('should be created', inject([CrawfordNavigationMenuService], (service: CrawfordNavigationMenuService) => {
    expect(service).toBeTruthy();
  }));
});
