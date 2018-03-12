import { TestBed, inject } from '@angular/core/testing';

import { CrawfordSnackbarService } from './snackbar.service';

describe('CrawfordSnackbarService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CrawfordSnackbarService]
    });
  });

  it('should be created', inject([CrawfordSnackbarService], (service: CrawfordSnackbarService) => {
    expect(service).toBeTruthy();
  }));
});
