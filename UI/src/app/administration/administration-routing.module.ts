import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from '../shared/guards/auth-guard.service';
import { CanDeactivateGuard } from '../shared/guards/can-deactivate-guard.service';

import { CodeDetailComponent } from './code-maintenance/code-detail/code-detail.component';
import { CodeListComponent } from './code-maintenance/code-list/code-list.component';

const administrationRoutes: Routes = [
  {
    path: 'administration',
    data: { title: 'Administration', icon: 'fa fa-fw fa-lock' },
    children: [
      {
        path: 'code-maintenance',
        canActivateChild: [AuthGuard],
        data: { title: 'Code Maintenance', icon: 'fa fa-fw fa-code' },
        children: [
          {
            path: '',
            component: CodeListComponent,
            pathMatch: 'full',
            canDeactivate: [CanDeactivateGuard],
          },
          {
            path: 'new',
            component: CodeDetailComponent,
            canDeactivate: [CanDeactivateGuard],
            data: { title: 'New', icon: 'fa fa-fw fa-plus', excludeFromMenu: true }
          },
          {
            path: ':id',
            component: CodeDetailComponent,
            canDeactivate: [CanDeactivateGuard],
            data: { title: 'Code Detail', excludeFromMenu: true }
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(administrationRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AdministrationRoutingModule { }
