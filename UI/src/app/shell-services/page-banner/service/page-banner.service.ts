import { Injectable, EventEmitter } from '@angular/core';
import { IPageBanner } from '../model/page-banner.model';
import { CrawfordBaseService } from '../../base-service/base.service';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CrawfordPageBannerService extends CrawfordBaseService<IPageBanner> {

  private hideBannerEvent: EventEmitter<any> = new EventEmitter<any>();

  public onHideBanner: Observable<any> = this.hideBannerEvent.asObservable();

  constructor() {
    super();
    this.default = { message: '' };
  }

  public displayInfoBanner(message: string) {
    const pageBanner: IPageBanner = {
      message: message,
      cssClass: 'info-banner'
    };

    this.source.next(pageBanner);
  }

  public displaySuccessBanner(message: string) {
    const pageBanner: IPageBanner = {
      message: message,
      cssClass: 'success-banner'
    };

    this.source.next(pageBanner);
  }

  public displayWarningBanner(message: string) {
    const pageBanner: IPageBanner = {
      message: message,
      cssClass: 'warning-banner'
    };

    this.source.next(pageBanner);
  }

  public displayErrorBanner(message: string) {
    const pageBanner: IPageBanner = {
      message: message,
      cssClass: 'error-banner'
    };

    this.source.next(pageBanner);
  }

  public hideBanner(): void {
    this.hideBannerEvent.emit();
  }
}
