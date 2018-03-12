import { TestBed, inject } from '@angular/core/testing';

import { CrawfordShellService } from './shell.service';

describe('CrawfordShellService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CrawfordShellService]
    });
  });

  it('should be created', inject([CrawfordShellService], (service: CrawfordShellService) => {
    expect(service).toBeTruthy();
  }));
});
