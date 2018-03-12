import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrawfordSlideToggleComponent } from './slide-toggle.component';

describe('CrawfordSlideToggleComponent', () => {
  let component: CrawfordSlideToggleComponent;
  let fixture: ComponentFixture<CrawfordSlideToggleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrawfordSlideToggleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrawfordSlideToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
