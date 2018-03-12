import { NgModule } from '@angular/core';
import { PageNotFoundComponent } from './page-not-found.component';
import { Routes, RouterModule } from '@angular/router';

const pageNotFoundRoutes: Routes = [
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(pageNotFoundRoutes)
  ],
  declarations: []
})
export class PageNotFoundRoutingModule { }
