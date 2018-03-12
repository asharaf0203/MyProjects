import { Injectable, EventEmitter } from '@angular/core';
import { Router, Route } from '@angular/router';
import { INavigationMenuItem } from '../models/navigation-menu-item.model';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { CrawfordBaseService } from '../../base-service/base.service';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CrawfordNavigationMenuService extends CrawfordBaseService<INavigationMenuItem[]> {
  private defaultExpandingItem: INavigationMenuItem = {
    title: '',
    path: '',
    icon: '',
    children: []
  };

  protected expandingItemSource = new BehaviorSubject<INavigationMenuItem>(this.defaultExpandingItem);
  public expandingItem: Observable<INavigationMenuItem> = this.expandingItemSource.asObservable();

  constructor(
    private router: Router
  ) {
    super();
  }

  buildNavigationFromRoutes() {
    const navItems: INavigationMenuItem[] = [];

    this.router.config.forEach(route => {
      const navItem = this.buildNavigationFromRoute(route, '');

      if (navItem) {
        navItems.push(navItem);
      }
    });

    this.source.next(navItems);
  }

  private buildNavigationFromRoute(route: Route, routePrefix: string): INavigationMenuItem {
    if (!route.data || !route.data.title || route.data.excludeFromMenu) {
      return null;
    }

    const navItem: INavigationMenuItem = {
      parent: '',
      path: routePrefix + route.path,
      title: route.data.title,
      icon: route.data.icon,
      children: []
    };

    if (route.children) {
      route.children.forEach(childRoute => {
        const childNavItem = this.buildNavigationFromRoute(childRoute, navItem.path + '/');

        if (childNavItem) {
          navItem.children.push(childNavItem);
        }
      });
    }

    return navItem;
  }

  public setExpandingMenuItem(expandingItem: INavigationMenuItem): void {
    if (this.expandingItem) {
      this.expandingItemSource.next(expandingItem);
    } else {
      this.expandingItemSource.next(this.defaultExpandingItem);
      console.error('A null menu item object was passed to the ' + this.constructor.name);
    }
  }


}
