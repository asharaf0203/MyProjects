import { Component, OnInit } from '@angular/core';
import { IBreadcrumb, CrawfordBreadcrumbService  } from '../../shell-services/shell-services.module';

@Component({
  selector: 'cco-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class CrawfordBreadcrumbComponent implements OnInit {
  public breadcrumbs: IBreadcrumb[];

  constructor(
    private breadcrumbService: CrawfordBreadcrumbService
  ) { }

  ngOnInit() {
    this.breadcrumbs = [];
    this.breadcrumbService.current.subscribe(breadcrumbs => {
      this.breadcrumbs = breadcrumbs;
    });
  }
}
