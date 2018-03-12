import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrawfordSearchBoxComponent } from './search-box.component';

describe('CrawfordSearchBoxComponent', () => {
  let component: CrawfordSearchBoxComponent;
  let fixture: ComponentFixture<CrawfordSearchBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrawfordSearchBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrawfordSearchBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
