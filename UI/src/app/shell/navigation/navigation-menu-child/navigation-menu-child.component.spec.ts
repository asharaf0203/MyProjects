import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrawfordNavigationMenuChildComponent } from './navigation-menu-child.component';

describe('NavigationMenuChildComponent', () => {
  let component: CrawfordNavigationMenuChildComponent;
  let fixture: ComponentFixture<CrawfordNavigationMenuChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrawfordNavigationMenuChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrawfordNavigationMenuChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
