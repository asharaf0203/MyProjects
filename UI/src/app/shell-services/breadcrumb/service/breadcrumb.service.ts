import { Injectable } from '@angular/core';
import { Router, ActivatedRoute, PRIMARY_OUTLET, ActivatedRouteSnapshot, NavigationEnd, Route } from '@angular/router';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';

import { CrawfordBaseService } from '../../base-service/base.service';
import { IBreadcrumb } from '../model/breadcrumb.model';

@Injectable()
export class CrawfordBreadcrumbService extends CrawfordBaseService<IBreadcrumb[]> {
  constructor(
    private router: Router
  ) {
    super();
  }

  private ROUTE_DATA_BREADCRUMB = 'breadcrumb';
  private ROUTE_DATA_TITLE = 'title';

  public setFromRoute(route: ActivatedRouteSnapshot): void {
    const breadcrumbs: Array<IBreadcrumb> = this.getBreadcrumbs(route);
    this.source.next(breadcrumbs);
  }

  private getBreadcrumbs(route: ActivatedRouteSnapshot, url: string = '', breadcrumbs: IBreadcrumb[] = []): IBreadcrumb[] {

    const children: Array<ActivatedRouteSnapshot> = route.children;

    if (children.length === 0) {
      if (breadcrumbs.length >= 1) {
        breadcrumbs[breadcrumbs.length - 1].isActive = true;
      }
      return breadcrumbs;
    }

    children
      .filter(child => child.outlet === PRIMARY_OUTLET)
      .forEach(child => {
        if (this.getBreadcrumbOrTitleData(child) === '') {
          breadcrumbs = this.getBreadcrumbs(child, url, breadcrumbs);
        } else {
          const routeURL: string = child.url.map(segment => segment.path).join('/');
          if (routeURL) {
            url += `/${routeURL}`;

            const breadcrumb: IBreadcrumb = {
              label: this.getBreadcrumbOrTitleData(child),
              params: child.params,
              url: url,
              isActive: false,
              isClickable: this.getIsClickable(child)
            };

            breadcrumbs.push(breadcrumb);
          }

          breadcrumbs = this.getBreadcrumbs(child, url, breadcrumbs);
        }
      });

    return breadcrumbs;
  }

  private getBreadcrumbOrTitleData(route: ActivatedRouteSnapshot): string {
    let label = '';

    if (route.data.hasOwnProperty(this.ROUTE_DATA_BREADCRUMB)) {
      label = route.data[this.ROUTE_DATA_BREADCRUMB];
    } else if (route.data.hasOwnProperty(this.ROUTE_DATA_TITLE)) {
      label = route.data[this.ROUTE_DATA_TITLE];
    }

    return label;
  }


  private getIsClickable(route: ActivatedRouteSnapshot): boolean {
    const hasComponent = (r: Route) => r.component !== undefined;
    const hasChildren = (r: Route) => r.children !== undefined;
    const hasEmptyPath = (r: Route) => r.path === '';
    const hasChildComponent = (r: Route) => hasChildren(r) && r.children.some(child => hasEmptyPath(child) && hasComponent(child));
    const hasBreadcrumbConfig = (r: Route) => r.data.hasOwnProperty(this.ROUTE_DATA_BREADCRUMB);

    return (hasComponent(route.routeConfig) || hasChildComponent(route.routeConfig) || hasBreadcrumbConfig(route.routeConfig));
  }
}
