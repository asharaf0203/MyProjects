import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrawfordNavigationMenuComponent } from './navigation-menu.component';
import { CrawfordNavigationMenuItemComponent } from './navigation-menu-item/navigation-menu-item.component';
import { CrawfordNavigationMenuFlyoutComponent } from './navigation-menu-flyout/navigation-menu-flyout.component';
import { CrawfordNavigationMenuChildComponent } from './navigation-menu-child/navigation-menu-child.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CrawfordNavigationMenuComponent,
    CrawfordNavigationMenuItemComponent,
    CrawfordNavigationMenuFlyoutComponent,
    CrawfordNavigationMenuChildComponent
  ],
  exports: [
    CrawfordNavigationMenuComponent
  ]
})
export class CrawfordNavigationMenuModule { }
