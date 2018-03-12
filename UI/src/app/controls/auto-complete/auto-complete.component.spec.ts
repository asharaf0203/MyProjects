import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrawfordAutoCompleteComponent } from './auto-complete.component';

describe('AutoCompleteComponent', () => {
  let component: CrawfordAutoCompleteComponent;
  let fixture: ComponentFixture<CrawfordAutoCompleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CrawfordAutoCompleteComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrawfordAutoCompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
