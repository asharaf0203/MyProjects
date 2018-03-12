import { Component, OnInit } from '@angular/core';

import {
  CrawfordNavigationMenuService, CrawfordPageHeaderService, CrawfordPageFooterService,
  INavigationMenuItem, IPageHeader, IPageFooter
} from './shell-services/shell-services.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app';

  constructor(
    private navigationMenuService: CrawfordNavigationMenuService,
    private pageHeaderService: CrawfordPageHeaderService,
    private pageFooterService: CrawfordPageFooterService,
  ) { }

  ngOnInit(): void {
    this.setHeader();
    this.setFooter();
    this.setNavigation();
  }

  private setHeader() {
    const pageHeader: IPageHeader = {
      header: 'Crawford Templates'
    };

    this.pageHeaderService.set(pageHeader);
  }

  private setFooter() {
    const pageFooter: IPageFooter = {
      footer: '&copy; Crawford & Company 2018'
    };

    this.pageFooterService.set(pageFooter);
  }

  private setNavigation() {
    this.navigationMenuService.buildNavigationFromRoutes();

    // const navItems: NavigationItem[] = [
    //   {
    //     title: 'Home',
    //     icon: 'fa fa-fw fa-home',
    //     path: '',
    //     children: []
    //   }
    // ];

    // this.navigationMenuService.set(navItems);
  }
}
