import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrawfordShellComponent } from './shell.component';

describe('CrawfordShellComponent', () => {
  let component: CrawfordShellComponent;
  let fixture: ComponentFixture<CrawfordShellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrawfordShellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrawfordShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
