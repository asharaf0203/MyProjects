import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrawfordGridComponent } from './grid.component';

describe('CrawfordGridComponent', () => {
  let component: CrawfordGridComponent;
  let fixture: ComponentFixture<CrawfordGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrawfordGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrawfordGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
