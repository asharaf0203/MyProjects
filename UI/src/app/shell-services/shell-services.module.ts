import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class ShellServicesModule { }

export { IBreadcrumb } from './breadcrumb/model/breadcrumb.model';
export { CrawfordBreadcrumbService } from './breadcrumb/service/breadcrumb.service';

export { IPageTitle } from './page-title/model/page-title.model';
export { IPageTitleAction } from './page-title/model/page-title-action.model';
export { CrawfordPageTitleService } from './page-title/service/page-title.service';

export { IPageFooter } from './page-footer/model/page-footer.model';
export { CrawfordPageFooterService} from './page-footer/service/page-footer.service';

export { IPageHeader } from './page-header/model/page-header.model';
export { CrawfordPageHeaderService} from './page-header/service/page-header.service';

export { INavigationMenuItem } from './navigation/models/navigation-menu-item.model';
export { CrawfordNavigationMenuService } from './navigation/service/navigation-menu.service';

export { ISnackbarDetails } from './snackbar/model/snackbar-details.model';
export { CrawfordSnackbarService } from './snackbar/service/snackbar.service';

export { IPageBanner } from './page-banner/model/page-banner.model';
export { CrawfordPageBannerService } from './page-banner/service/page-banner.service';

export { CrawfordShellService } from './service/shell.service';
