import { TestBed, inject } from '@angular/core/testing';

import { CrawfordValidationService } from './validation.service';

describe('CrawfordValidationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CrawfordValidationService]
    });
  });

  it('should be created', inject([CrawfordValidationService], (service: CrawfordValidationService) => {
    expect(service).toBeTruthy();
  }));
});
