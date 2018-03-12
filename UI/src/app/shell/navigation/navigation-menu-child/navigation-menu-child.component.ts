import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { NgIf } from '@angular/common';
import { INavigationMenuItem, CrawfordNavigationMenuService } from '../../../shell-services/shell-services.module';
import { Router } from '@angular/router';

@Component({
  selector: 'cco-navigation-menu-child',
  templateUrl: './navigation-menu-child.component.html',
  styleUrls: ['./navigation-menu-child.component.scss']
})
export class CrawfordNavigationMenuChildComponent implements OnInit {
  @Input() navMenuItem: INavigationMenuItem;
  @Output() navChildClick: EventEmitter<null> = new EventEmitter();

  public expandClass: string;
  public hasChildren: boolean;
  public holdOpen: boolean;
  public showChildren: boolean;

  private expandTimeout;
  private contractTimeout;

  constructor(
    private router: Router,
    private navigationMenuService: CrawfordNavigationMenuService

  ) { }

  ngOnInit() {
    this.holdOpen = false;
    this.showChildren = false;
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

  onClick(): void {
    if (this.hasChildren) {
      this.showChildren = !this.showChildren;

      if (this.showChildren) {
        this.expandClass = 'fa fa-angle-down';
        this.navigationMenuService.setExpandingMenuItem(this.navMenuItem);
      } else {
        this.expandClass = 'fa fa-angle-right';
      }
    } else {
      console.log('Navigating to path: "' + this.navMenuItem.path + '"');
      this.router.navigateByUrl(this.navMenuItem.path);
      this.navChildClick.emit();
    }
  }

  onNavChildClick(): void {
    this.navChildClick.emit();
  }

  // onMouseOver(): void {
  //   if (this.hasChildren) {
  //     this.expandTimeout = setTimeout(() => {
  //       this.expandClass = 'fa fa-angle-down';
  //       this.showChildren = true;
  //     }, 500);
  //   }
  // }

  // onMouseOut(): void {
  //   if (this.hasChildren && !this.holdOpen) {
  //     if (this.expandTimeout) {
  //       clearTimeout(this.expandTimeout);
  //       console.log('Expand timeout cleared');
  //     }

  //     this.expandClass = 'fa fa-angle-right';
  //     this.showChildren = false;
  //   }
  // }

  // onClick(): void {
  //   if (this.hasChildren) {
  //     this.holdOpen = !this.holdOpen;
  //   }
  // }
}
