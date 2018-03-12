import { Component, OnInit, ViewChild } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { GridComponent } from '@syncfusion/ej2-ng-grids';

import { Code } from '../../models/code.models';
import { CrawfordPageTitleService, CrawfordSnackbarService, IPageTitle } from '../../../shell/shell.module';
import { GridColumn } from '../../../controls/grid/model/grid-column.model';
import { PagingSettings } from '../../../controls/grid/model/settings.model';

@Component({
  selector: 'app-code-list',
  templateUrl: './code-list.component.html',
  styleUrls: ['./code-list.component.scss']
})
export class CodeListComponent implements OnInit {

  @ViewChild('grid') private grid: GridComponent;

  public gridData: any;
  public displayColumns: GridColumn[] = [
    new GridColumn('code', 'Code'),
    new GridColumn('description', 'Description'),
    new GridColumn('frenchDescription', 'French Description'),
    new GridColumn('active', 'Active')
  ];

  public gridPageSettings: PagingSettings = {
    pageSize: 20
  };

  constructor(
    private router: Router,
    private pageTitleService: CrawfordPageTitleService,
    private snackbarService: CrawfordSnackbarService
  ) { }

  ngOnInit() {
    this.pageTitleService.addAction({ callback: () => this.add(), icon: 'fa fa-magic', title: 'magic' });
    this.pageTitleService.registerAdd(() => this.add());
    this.pageTitleService.addAction({
      callback: () => this.snackbarService.displayInfoMessage('You have clicked a combined callback and navigation button'),
      route: ['/search'],
      icon: 'fa fa-search',
      title: 'search'
    });

    this.gridData = [
      new Code(123, '1235', 'This is a description', 'This is a french description', true),
      new Code(1234, '7432', 'This is a description', 'This is a french description', false)
    ];
  }

  getCodeList(codeId: number): void {
    // this.service.getCodeList().subscribe(
    //   (codes) => {
    //     if (codes) {
    //       this.gridData = codes;
    //       this.setFormValues();
    //     } else {
    //       // no code found with id
    //     }
    //   },
    //   (error) => console.log(error) // handle any error thrown with the get.
    // );
  }

  goToCodeDetail($event) {
    if ($event) {
      this.router.navigate(['administration/code-maintenance/', $event.data.code]);
    }
  }

  add() {
    this.router.navigate(['/administration/code-maintenance/new']);
  }

  onDataBound($event) {
    console.log('Data bound - ' + $event.data.length + ' records in view');
  }

  onRowDataBound($event) {
    console.log('Row Data Bound: ' + $event.data.code + ' - ' + $event.data.description);
  }
}
