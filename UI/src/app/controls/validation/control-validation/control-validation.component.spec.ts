import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrawfordControlValidationComponent } from './control-validation.component';

describe('CrawfordControlValidationComponent', () => {
  let component: CrawfordControlValidationComponent;
  let fixture: ComponentFixture<CrawfordControlValidationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrawfordControlValidationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrawfordControlValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
