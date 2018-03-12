import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './shared/guards/auth-guard.service';
import { CanDeactivateGuard } from './shared/guards/can-deactivate-guard.service';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { SearchComponent } from './search/search.component';

const appRoutes: Routes = [
  {
    path: '',
    component: WelcomeComponent,
    pathMatch: 'full',
    data: { title: 'Home', icon: 'fa fa-fw fa-home' }
  },
  {
    path: 'search',
    component: SearchComponent,
    pathMatch: 'full',
    data: { title: 'Search', icon: 'fa fa-fw fa-search' }
  },
  // These routes are to demonstrate the navigation menu
  // Please add all routing into separate modules - see "Administration" example
  {
    path: 'dashboard',
    data: { title: 'Dashboard', icon: 'fa fa-fw fa-dashboard' },
    children: [
      {
        path: 'item1',
        component: WelcomeComponent,
        data: { title: 'Menu Item 1', icon: 'fa fa-fw fa-tachometer' }
      },
      {
        path: 'item2',
        component: WelcomeComponent,
        data: { title: 'Menu Item 2', icon: 'fa fa-fw fa-exclamation-triangle' }
      },
      {
        path: 'item3',
        component: WelcomeComponent,
        data: { title: 'Menu Item 3', icon: 'fa fa-fw fa-wrench' }
      },
      {
        path: 'item4',
        component: WelcomeComponent,
        data: { title: 'Menu Item 4', icon: 'fa fa-fw fa-file-text-o' }
      }
    ]
  },
  {
    path: 'navigation',
    data: { title: 'Navigation', icon: 'fa fa-fw fa-exclamation-triangle' },
    children: [
      {
        path: 'item1',
        component: WelcomeComponent,
        data: { title: 'Menu Item 1', icon: 'fa fa-fw fa-tachometer' }
      },
      {
        path: 'item2',
        component: WelcomeComponent,
        data: { title: 'Menu Item 2', icon: 'fa fa-fw fa-exclamation-triangle' }
      },
      {
        path: 'item3',
        data: { title: 'Menu Item 3', icon: 'fa fa-fw fa-wrench' },
        children: [
          {
            path: 'subItem1',
            component: WelcomeComponent,
            data: { title: 'Sub Menu Item 1', icon: 'fa fa-fw fa-plus' }
          },
          {
            path: 'subItem2',
            component: WelcomeComponent,
            data: { title: 'Sub Menu Item 2', icon: 'fa fa-fw fa-bluetooth-b' }
          },
          {
            path: 'subItem3',
            data: { title: 'Sub Menu Item 3', icon: 'fa fa-fw fa-area-chart' },
            children: [
              {
                path: 'subSubItem1',
                component: WelcomeComponent,
                data: { title: 'Sub Sub Menu Item 1', icon: 'fa fa-fw fa-bluetooth-b' }
              },
              {
                path: 'subSubItem2',
                component: WelcomeComponent,
                data: { title: 'Sub Sub Menu Item 2', icon: 'fa fa-fw fa-automobile' }
              },
              {
                path: 'subSubItem3',
                component: WelcomeComponent,
                data: { title: 'Sub Sub Menu Item 3', icon: 'fa fa-fw fa-university ' }
              },
              {
                path: 'subSubItem4',
                component: WelcomeComponent,
                data: { title: 'Sub Sub Menu Item 4', icon: 'fa fa-fw fa-bell' }
              },
              {
                path: 'subSubItem5',
                component: WelcomeComponent,
                data: { title: 'Sub Sub Menu Item 5', icon: 'fa fa-fw fa-bed' }
              }
            ]
          }
        ]
      },
      {
        path: 'item4',
        component: WelcomeComponent,
        data: { title: 'Menu Item 4', icon: 'fa fa-fw fa-file-text-o' },
        children: [
          {
            path: 'subItem1',
            component: WelcomeComponent,
            data: { title: 'Sub Menu Item 1', icon: 'fa fa-fw fa-plus' }
          },
          {
            path: 'subItem2',
            component: WelcomeComponent,
            data: { title: 'Sub Menu Item 2', icon: 'fa fa-fw fa-bluetooth-b' }
          },
          {
            path: 'subItem3',
            data: { title: 'Sub Menu Item 3', icon: 'fa fa-fw fa-area-chart' },
            children: [
              {
                path: 'subSubItem1',
                component: WelcomeComponent,
                data: { title: 'Sub Sub Menu Item 1', icon: 'fa fa-fw fa-bluetooth-b' }
              },
              {
                path: 'subSubItem2',
                component: WelcomeComponent,
                data: { title: 'Sub Sub Menu Item 2', icon: 'fa fa-fw fa-automobile' }
              },
              {
                path: 'subSubItem3',
                component: WelcomeComponent,
                data: { title: 'Sub Sub Menu Item 3', icon: 'fa fa-fw fa-university ' }
              },
              {
                path: 'subSubItem4',
                component: WelcomeComponent,
                data: { title: 'Sub Sub Menu Item 4', icon: 'fa fa-fw fa-bell' }
              },
              {
                path: 'subSubItem5',
                component: WelcomeComponent,
                data: { title: 'Sub Sub Menu Item 5', icon: 'fa fa-fw fa-bed' }
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: 'reports',
    data: { title: 'Reports', icon: 'fa fa-fw fa-file-text' },
    children: [
      {
        path: 'item1',
        component: WelcomeComponent,
        data: { title: 'Menu Item 1', icon: 'fa fa-fw fa-binoculars' }
      },
      {
        path: 'item2',
        component: WelcomeComponent,
        data: { title: 'Menu Item 2', icon: 'fa fa-fw fa-balance-scale' }
      },
      {
        path: 'item3',
        component: WelcomeComponent,
        data: { title: 'Menu Item 3', icon: 'fa fa-fw' }
      },
      {
        path: 'item4',
        component: WelcomeComponent,
        data: { title: 'Menu Item 4', icon: 'fa fa-fw fa-archive' }
      }
    ]
  },
  {
    path: 'finance',
    data: { title: 'Finance', icon: 'fa fa-fw fa-usd' },
    children: [
      {
        path: 'item1',
        component: WelcomeComponent,
        data: { title: 'Menu Item 1', icon: 'fa fa-fw fa-university' }
      },
      {
        path: 'item2',
        component: WelcomeComponent,
        data: { title: 'Menu Item 2', icon: 'fa fa-fw fa-headphones' }
      },
      {
        path: 'item3',
        component: WelcomeComponent,
        data: { title: 'Menu Item 3', icon: 'fa fa-fw fa-heart' }
      },
      {
        path: 'item4',
        component: WelcomeComponent,
        data: { title: 'Menu Item 4', icon: 'fa fa-fw' }
      }
    ]
  },
  {
    path: 'claims',
    data: { title: 'Claims', icon: 'fa fa-fw fa-list' },
    children: [
      {
        path: 'item1',
        component: WelcomeComponent,
        data: { title: 'Menu Item 1', icon: 'fa fa-fw fa-shopping-cart' }
      },
      {
        path: 'item2',
        component: WelcomeComponent,
        data: { title: 'Menu Item 2', icon: 'fa fa-fw fa-sliders' }
      },
      {
        path: 'item3',
        component: WelcomeComponent,
        data: { title: 'Menu Item 3', icon: 'fa fa-fw fa-signal' }
      },
      {
        path: 'item4',
        component: WelcomeComponent,
        data: { title: 'Menu Item 4', icon: 'fa fa-fw fa-rss' }
      }
    ]
  },
  {
    path: 'tasks',
    data: { title: 'Tasks', icon: 'fa fa-fw fa-hourglass-half' },
    children: [
      {
        path: 'item1',
        component: WelcomeComponent,
        data: { title: 'Menu Item 1', icon: 'fa fa-fw fa-paper-plane' }
      },
      {
        path: 'item2',
        component: WelcomeComponent,
        data: { title: 'Menu Item 2', icon: 'fa fa-fw fa-map-o' }
      },
      {
        path: 'item3',
        component: WelcomeComponent,
        data: { title: 'Menu Item 3', icon: 'fa fa-fw fa-motorcycle' }
      },
      {
        path: 'item4',
        component: WelcomeComponent,
        data: { title: 'Menu Item 4', icon: 'fa fa-fw fa-video-camera' }
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
    // , { enableTracing: true } ) // <-- debugging purposes only

  ],
  exports: [
    RouterModule
  ],
  providers: [
    AuthGuard,
    CanDeactivateGuard,
  ]
})

export class AppRoutingModule { }
