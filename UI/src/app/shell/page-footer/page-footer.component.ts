import { Component, OnInit } from '@angular/core';
import { IPageFooter, CrawfordPageFooterService } from '../../shell-services/shell-services.module';

@Component({
  selector: 'cco-page-footer',
  templateUrl: './page-footer.component.html',
  styleUrls: ['./page-footer.component.scss']
})
export class CrawfordPageFooterComponent implements OnInit {

  pageFooter: IPageFooter = {
    footer: '&copy; Crawford & Company 2018'
  };

  constructor(
    private pageFooterService: CrawfordPageFooterService
  ) { }

  ngOnInit() {
    this.pageFooterService.current.subscribe(pageFooter => {
      this.pageFooter = pageFooter;
    });
  }

}
