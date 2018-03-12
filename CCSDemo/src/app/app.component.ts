import { Component, OnInit } from '@angular/core';
import { CrawfordSnackbarService, CrawfordNavigationMenuService, CrawfordPageHeaderService,
  CrawfordPageFooterService,
  IPageHeader,
  IPageFooter} from 'crawford-shell';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private snackService: CrawfordSnackbarService, private navigationMenuService: CrawfordNavigationMenuService,
    private pageHeaderService: CrawfordPageHeaderService,
    private pageFooterService: CrawfordPageFooterService, ) {}

  ngOnInit() {
     this.snackService.displaySuccessMessage('Welcome');
     this.pageHeaderService.set({ header: 'Crawford Templates' });
     this.pageFooterService.set({ footer: '&copy; Crawford & Company 2018' });
     //this.setHeader();
     //this.setFooter();
     this.navigationMenuService.buildNavigationFromRoutes();
  }
  // private setHeader() {
  //   const pageHeader: IPageHeader = {
  //     header: 'Crawford Templates'
  //   };

  //   this.pageHeaderService.set(pageHeader);
  // }

  // private setFooter() {
  //   const pageFooter: IPageFooter = {
  //     footer: '&copy; Crawford & Company 2018'
  //   };

  //   this.pageFooterService.set(pageFooter);
  // }

}

