import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrawfordSnackbarComponent } from './snackbar.component';

describe('CrawfordSnackbarComponent', () => {
  let component: CrawfordSnackbarComponent;
  let fixture: ComponentFixture<CrawfordSnackbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrawfordSnackbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrawfordSnackbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
