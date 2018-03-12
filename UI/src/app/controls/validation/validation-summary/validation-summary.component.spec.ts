import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrawfordValidationSummaryComponent } from './validation-summary.component';

describe('CrawfordValidationSummaryComponent', () => {
  let component: CrawfordValidationSummaryComponent;
  let fixture: ComponentFixture<CrawfordValidationSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrawfordValidationSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrawfordValidationSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
