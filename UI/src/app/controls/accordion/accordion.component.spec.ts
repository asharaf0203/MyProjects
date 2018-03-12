import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrawfordAccordionComponent } from './accordion.component';

describe('CrawfordAccordionComponent', () => {
  let component: CrawfordAccordionComponent;
  let fixture: ComponentFixture<CrawfordAccordionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrawfordAccordionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrawfordAccordionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
