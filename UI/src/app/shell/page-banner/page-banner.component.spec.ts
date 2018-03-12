import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrawfordPageBannerComponent } from './page-banner.component';

describe('CrawfordPageBannerComponent', () => {
  let component: CrawfordPageBannerComponent;
  let fixture: ComponentFixture<CrawfordPageBannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrawfordPageBannerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrawfordPageBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
