import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrawfordBreadcrumbComponent } from './breadcrumb.component';

describe('CrawfordBreadcrumbComponent', () => {
  let component: CrawfordBreadcrumbComponent;
  let fixture: ComponentFixture<CrawfordBreadcrumbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrawfordBreadcrumbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrawfordBreadcrumbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
