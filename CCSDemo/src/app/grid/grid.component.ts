import { Component, OnInit } from '@angular/core';
import { GridColumn, PagingSettings, CrawfordPageTitleService, CrawfordSnackbarService } from 'crawford-shell';
import { Code } from '../code';
import { Router } from '@angular/router';




@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {
  gridData: any;
  searchDescription: string = 'Search for Code';
  searchRegex: any = '^([A-Za-z]|[A-Za-z][0-9]*|[0-9]*[A-Za-z])+$';
  patternDescrition: string = 'Wrong search...';
  public displayColumns: GridColumn[] = [
    new GridColumn('Code', 'Code', {type: 'boolean', allowResizing: false, allowSorting: true, allowFiltering: false, allowGrouping: true}),
    new GridColumn('Description', 'Description',{format: {minimumFractionDigits:2}}),
    new GridColumn('FrenchDescription', 'French Description', {width: 200, minWidth: 170, maxWidth: 300, textAlign: 'center'}),
    new GridColumn('Value', 'Value'),
    new GridColumn('Active', 'Active', {width: 200, minWidth: 170, maxWidth: 300, textAlign: 'center', type: 'boolean',
    headerTemplate: '<i class="fa fa-user-circle" aria-hidden="true">Active</i>',
     template: '<button>Active</button>'})
    ];
    public gridPageSettings: PagingSettings = {
      pageSize: 20,
      pageCount: 5,
      currentPage: 1,
      enableQueryString: false,
      pageSizes: [10, 25, 50, 100]
    };

  constructor(private router: Router, private pageTitleService: CrawfordPageTitleService,
     private snackbarService: CrawfordSnackbarService) {
      }

  ngOnInit() {
    this.gridData = [
      new Code(1, 'Code1', 'Description1', 'FrenchDescription1', 23.345, true ),
      new Code(2, 'Code2', 'Description1', 'FrenchDescription2', 24.346, false )
    ];
    this.pageTitleService.addAction({
      callback: () => this.add(),
      icon: 'fa fa-magic',
      title: 'magic'
      });
      this.pageTitleService.addAction({
        route: ['/dashboard'],
        icon: 'fa fa-snowflake-o',
        title: 'search'
        });
    this.pageTitleService.registerAdd(() => this.add());

  }
  search(searchText: string): void {
    if (!searchText) {
      alert('Nothing to search...Please write to search something!!!');
    } else {
      alert(searchText);
    }
  }
  add(): void {
    this.router.navigate(['dashboard']);
    this.snackbarService.displaySuccessMessage('Add btn Clicked !!');
  }
}

