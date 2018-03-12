import { Injectable } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Route, Router, NavigationEnd } from '@angular/router';

import { IPageTitle } from '../page-title/model/page-title.model';
import { CrawfordPageTitleService } from '../page-title/service/page-title.service';
import { CrawfordBreadcrumbService } from '../breadcrumb/service/breadcrumb.service';
import { CrawfordPageBannerService } from '../page-banner/service/page-banner.service';

@Injectable()
export class CrawfordShellService {

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private pageTitleService: CrawfordPageTitleService,
    private breadcrumbService: CrawfordBreadcrumbService,
    private pageBannerService: CrawfordPageBannerService
  ) {
    this.router.events.filter(event => event instanceof NavigationEnd).subscribe(event => {
      const route: ActivatedRoute = this.router.routerState.root;
      const routeSnapshot: ActivatedRouteSnapshot = this.router.routerState.snapshot.root;
      this.pageBannerService.hideBanner();
      this.pageTitleService.setFromRoute(route);
      this.breadcrumbService.setFromRoute(routeSnapshot);
    });
  }

}
