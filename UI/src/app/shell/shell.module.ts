import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import {
  CrawfordShellService, CrawfordPageHeaderService, CrawfordPageFooterService,
  CrawfordPageTitleService, CrawfordBreadcrumbService, CrawfordNavigationMenuService,
  CrawfordSnackbarService, CrawfordPageBannerService, ShellServicesModule
} from '../shell-services/shell-services.module';

import { CrawfordControlsModule } from '../controls/controls.module';

import { CrawfordShellComponent } from './shell.component';
import { CrawfordPageHeaderComponent } from './page-header/page-header.component';
import { CrawfordPageFooterComponent } from './page-footer/page-footer.component';
import { CrawfordBreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { CrawfordPageTitleComponent } from './page-title/page-title.component';
import { CrawfordSnackbarComponent } from './snackbar/snackbar.component';
import { CrawfordNavigationMenuModule } from './navigation/navigation-menu.module';
import { CrawfordPageBannerComponent } from './page-banner/page-banner.component';

@NgModule({
  declarations: [
    CrawfordShellComponent,
    CrawfordPageHeaderComponent,
    CrawfordBreadcrumbComponent,
    CrawfordPageTitleComponent,
    CrawfordPageFooterComponent,
    CrawfordSnackbarComponent,
    CrawfordPageBannerComponent
  ],
  imports: [
    CrawfordControlsModule,
    CommonModule,
    RouterModule,
    CrawfordNavigationMenuModule,
    ShellServicesModule
  ],
  exports: [
    CrawfordShellComponent
  ],
  providers: [
    CrawfordShellService
  ]
})
export class ShellModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: ShellModule,
      providers: [
        CrawfordPageHeaderService,
        CrawfordPageFooterService,
        CrawfordPageTitleService,
        CrawfordBreadcrumbService,
        CrawfordPageBannerService,
        CrawfordNavigationMenuService,
        CrawfordSnackbarService
      ]
    };
  }
}

export * from '../shell-services/shell-services.module';
