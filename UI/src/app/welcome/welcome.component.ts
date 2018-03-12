import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IPageTitle, CrawfordPageTitleService, CrawfordSnackbarService, CrawfordPageBannerService, IPageBanner } from '../shell-services/shell-services.module';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {
  public requestedRoute: string;
  private pageTitle: IPageTitle = {
    title: 'Welcome to the Crawford Template'
  };

  constructor(
    private router: Router,
    private snackbarService: CrawfordSnackbarService,
    private pageTitleService: CrawfordPageTitleService,
    private pageBannerService: CrawfordPageBannerService
  ) {
    this.pageTitleService.set(this.pageTitle);
  }

  ngOnInit() {
    this.requestedRoute = this.router.url;
  }

  showSuccessMessage() {
    this.snackbarService.displaySuccessMessage('Here is a sample success message');
  }

  showWarningMessage() {
    this.snackbarService.displayWarningMessage('Here is a sample warning message');
  }

  showErrorMessage() {
    this.snackbarService.displayErrorMessage('Here is a sample error message');
  }

  showInfoMessage() {
    this.snackbarService.displayInfoMessage('Here is a sample informative message');
  }

  showSuccessBanner() {
    this.pageBannerService.displaySuccessBanner('Here is a sample success banner');
  }

  showWarningBanner() {
    this.pageBannerService.displayWarningBanner('Here is a sample warning banner');
  }

  showErrorBanner() {
    this.pageBannerService.displayErrorBanner('Here is a sample error banner');
  }

  showInfoBanner() {
    this.pageBannerService.displayInfoBanner('Here is a sample informative banner');
  }

  showCustomBanner() {
    const pageBanner: IPageBanner = {
      message: 'Here is a sample custom message',
      backgroundColour: 'SlateBlue',
      textColour: 'Goldenrod',
      fontSize: '30px'
    };

    this.pageBannerService.set(pageBanner);
  }

  hideBanner() {
    this.pageBannerService.hideBanner();
  }

  search(): void {
    this.router.navigate(['/search']);
  }
}
