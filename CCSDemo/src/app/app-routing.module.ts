import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { GridComponent } from './grid/grid.component';

const appRoutes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    pathMatch: 'full',
    data: { title: 'Dashboard', icon: 'fa fa-fw fa-dashboard' }
  },
  {
    path: 'navigation',
    component: GridComponent,
    data: { title: 'Grid', icon: 'fa fa-braille' }
    // children: [
    //   {
    //     path: 'item1',
    //     component: DashboardComponent,
    //     data: { title: 'Menu Item 1', icon: 'fa fa-fw fa-tachometer' }
    //   }]
  }
];
@NgModule({
  imports: [
    CommonModule, RouterModule.forRoot(appRoutes)
  ],

  declarations: []
})
export class AppRoutingModule { }
