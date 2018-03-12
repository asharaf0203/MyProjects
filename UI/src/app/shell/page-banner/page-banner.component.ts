import { Component, OnInit, EventEmitter } from '@angular/core';
import { IPageBanner, CrawfordPageBannerService } from '../../shell-services/shell-services.module';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'cco-page-banner',
  templateUrl: './page-banner.component.html',
  styleUrls: ['./page-banner.component.scss']
})
export class CrawfordPageBannerComponent implements OnInit {

  pageBanner: IPageBanner;
  visible: boolean;

  constructor(
    private pageBannerService: CrawfordPageBannerService
  ) { }

  ngOnInit() {
    this.pageBannerService.current.subscribe(pageBanner => {
      this.pageBanner = pageBanner;

      if (this.pageBanner && this.pageBanner.message) {
        this.visible = true;
      } else {
        this.visible = false;
      }
    });

    this.pageBannerService.onHideBanner.subscribe(() => {
      this.visible = false;
    });


  }
}
