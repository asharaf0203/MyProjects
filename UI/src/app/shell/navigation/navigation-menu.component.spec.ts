import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrawfordNavigationMenuComponent } from './navigation-menu.component';

describe('CrawfordNavigationMenuComponent', () => {
  let component: CrawfordNavigationMenuComponent;
  let fixture: ComponentFixture<CrawfordNavigationMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrawfordNavigationMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrawfordNavigationMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
