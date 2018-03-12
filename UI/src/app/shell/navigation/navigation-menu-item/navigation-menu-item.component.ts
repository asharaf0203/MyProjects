import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { INavigationMenuItem, CrawfordNavigationMenuService } from '../../../shell-services/shell-services.module';
import { Router } from '@angular/router';

@Component({
  selector: 'cco-navigation-menu-item',
  templateUrl: './navigation-menu-item.component.html',
  styleUrls: ['./navigation-menu-item.component.scss']
})
export class CrawfordNavigationMenuItemComponent implements OnInit {
  @Input() navMenuItem: INavigationMenuItem;
  @Output() navClick: EventEmitter<null> = new EventEmitter();

  public expandClass: string;
  public hasChildren: boolean;
  public showChildren: boolean;

  constructor(
    private router: Router,
    private navigationMenuService: CrawfordNavigationMenuService
  ) { }

  ngOnInit() {
    this.hasChildren = this.navMenuItem.children.length > 0;

    if (this.hasChildren) {
      this.expandClass = 'fa fa-angle-right';
      this.navigationMenuService.expandingItem.subscribe(expandingItem => {
        this.collapseSubMenu(expandingItem);
      });
    } else {
      this.expandClass = '';
    }
  }

  private collapseSubMenu(expandingItem: INavigationMenuItem): void {
    if (expandingItem === this.navMenuItem) {
      return;
    }

    const isChild = this.isMenuItemChild(expandingItem, this.navMenuItem);

    if (!isChild) {
      this.showChildren = false;
      this.expandClass = 'fa fa-angle-right';
    }
  }

  private isMenuItemChild(expandingItem: INavigationMenuItem, checkItem: INavigationMenuItem): boolean {
    let isChild = false;

    checkItem.children.forEach(item => {
      if (expandingItem === item) {
        isChild = true;
        return;
      }

      if (this.isMenuItemChild(expandingItem, item)) {
        isChild = true;
      }
    });

    return isChild;
  }

  onNavMenuItemClick(): void {
    if (this.navMenuItem.children.length === 0) {
      this.router.navigateByUrl(this.navMenuItem.path);
      this.navClick.emit();
    } else {
      this.showChildren = !this.showChildren;

      if (this.showChildren) {
        this.expandClass = 'fa fa-angle-down';
        this.navigationMenuService.setExpandingMenuItem(this.navMenuItem);
      } else {
        this.expandClass = 'fa fa-angle-right';
      }
    }
  }

  onNavChildClick(): void {
    this.navClick.emit();
  }

}
