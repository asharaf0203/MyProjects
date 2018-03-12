import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrawfordTextboxComponent } from './textbox.component';

describe('CrawfordTextboxComponent', () => {
  let component: CrawfordTextboxComponent;
  let fixture: ComponentFixture<CrawfordTextboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrawfordTextboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrawfordTextboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
