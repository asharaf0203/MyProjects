import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrawfordNavigationMenuFlyoutComponent } from './navigation-menu-flyout.component';

describe('CrawfordNavigationMenuFlyoutComponent', () => {
  let component: CrawfordNavigationMenuFlyoutComponent;
  let fixture: ComponentFixture<CrawfordNavigationMenuFlyoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrawfordNavigationMenuFlyoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrawfordNavigationMenuFlyoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
