import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrawfordPageTitleComponent } from './page-title.component';

describe('CrawfordPageTitleComponent', () => {
  let component: CrawfordPageTitleComponent;
  let fixture: ComponentFixture<CrawfordPageTitleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrawfordPageTitleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrawfordPageTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
