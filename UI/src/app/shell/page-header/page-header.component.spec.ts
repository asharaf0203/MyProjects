import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrawfordPageHeaderComponent } from './page-header.component';

describe('CrawfordPageHeaderComponent', () => {
  let component: CrawfordPageHeaderComponent;
  let fixture: ComponentFixture<CrawfordPageHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrawfordPageHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrawfordPageHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
