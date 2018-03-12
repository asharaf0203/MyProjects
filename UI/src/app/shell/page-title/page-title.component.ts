import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CrawfordPageTitleService, IPageTitle } from '../../shell-services/shell-services.module';

@Component({
  selector: 'cco-page-title',
  templateUrl: './page-title.component.html',
  styleUrls: ['./page-title.component.scss']
})
export class CrawfordPageTitleComponent implements OnInit {

  pageTitle: IPageTitle;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private pageTitleService: CrawfordPageTitleService
  ) { }

  ngOnInit() {
    this.pageTitle = { title: ''};

    this.pageTitleService.current.subscribe(pageTitle => {
      this.pageTitle = pageTitle;
    });

    this.pageTitleService.titleChange.subscribe(title => {
        this.pageTitle.title = title;
    });

    this.pageTitleService.actionAdded.subscribe(action => {
      if (!action || !action.icon) {
        return;
      }

      if (!this.pageTitle.actions) {
        this.pageTitle.actions = [];
      }

      this.pageTitle.actions.push(action);
    });
  }
}
