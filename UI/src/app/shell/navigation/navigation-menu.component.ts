import { Component, OnInit, ViewEncapsulation, Injectable } from '@angular/core';
import { Router, Route } from '@angular/router';
import { INavigationMenuItem, CrawfordNavigationMenuService } from '../../shell-services/shell-services.module';

@Component({
  selector: 'cco-navigation-menu',
  templateUrl: './navigation-menu.component.html',
  styleUrls: ['./navigation-menu.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CrawfordNavigationMenuComponent implements OnInit {

  public navMenuItemList: INavigationMenuItem[];
  public showMenu: boolean;

  constructor(
    private router: Router,
    private navigationMenuService: CrawfordNavigationMenuService
  ) { }

  ngOnInit() {
    this.navMenuItemList = [];

    this.navigationMenuService.current.subscribe(navMenuItems => {
      this.navMenuItemList = navMenuItems;
    });
  }

  onNavMenuCollapseClick(): void {
    this.showMenu = !this.showMenu;
  }

  onNavMenuItemClick(): void {
    this.showMenu = false;
  }
}
