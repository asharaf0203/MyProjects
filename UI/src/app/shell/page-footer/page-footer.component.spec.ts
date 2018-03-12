import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrawfordPageFooterComponent } from './page-footer.component';

describe('CrawfordPageFooterComponent', () => {
  let component: CrawfordPageFooterComponent;
  let fixture: ComponentFixture<CrawfordPageFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrawfordPageFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrawfordPageFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
