import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrawfordNavigationMenuItemComponent } from './navigation-menu-item.component';

describe('NavigationMenuItemComponent', () => {
  let component: CrawfordNavigationMenuItemComponent;
  let fixture: ComponentFixture<CrawfordNavigationMenuItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrawfordNavigationMenuItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrawfordNavigationMenuItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
