import { Component, OnInit } from '@angular/core';
import { IPageHeader, CrawfordPageHeaderService } from '../../shell-services/shell-services.module';

@Component({
  selector: 'cco-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.scss']
})
export class CrawfordPageHeaderComponent implements OnInit {

  pageHeader: IPageHeader = {
    header: 'Crawford Templates'
  };

  constructor(
    private pageHeaderService: CrawfordPageHeaderService
  ) { }

  ngOnInit() {
    this.pageHeaderService.current.subscribe(pageHeader => {
      this.pageHeader = pageHeader;
    });
  }
}
