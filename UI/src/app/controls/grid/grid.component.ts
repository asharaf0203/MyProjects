import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';

import {
  GridComponent, SearchService, EditSettingsModel, ColumnMenuService, ContextMenuItem,
  SortService, PageService, FilterService, FilterSettingsModel, ResizeService,
  SortEventArgs, RowDataBoundEventArgs, FailureEventArgs, RowSelectEventArgs
} from '@syncfusion/ej2-ng-grids';

import { GridColumn } from './model/grid-column.model';
import { PagingSettings, SortingSettings } from './model/settings.model';

@Component({
  selector: 'cco-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss'],
  providers: [SortService, ResizeService, ColumnMenuService, PageService]
})
export class CrawfordGridComponent implements OnInit {

  @ViewChild('grid') private grid: GridComponent;

  @Input() public dataSource;

  @Input() public enableSorting = false;
  @Input() public enablePaging = false;
  @Input() public enableFiltering = false;
  @Input() public enableResizing = false;
  @Input() public enableColumnMenu = true;

  @Input() public sortingSettings: SortingSettings;
  @Input() public pagingSettings: PagingSettings ;

  @Input() public columns: GridColumn[];

  @Output() public onActionBegin: EventEmitter<any> = new EventEmitter<any>();
  @Output() public onActionComplete: EventEmitter<any> = new EventEmitter<any>();
  @Output() public onDataBound: EventEmitter<any> = new EventEmitter<any>();
  @Output() public onActionFailure: EventEmitter<FailureEventArgs> = new EventEmitter<FailureEventArgs>();
  @Output() public onRowSelected: EventEmitter<RowSelectEventArgs> = new EventEmitter<RowSelectEventArgs>();
  @Output() public onRowDataBound: EventEmitter<RowDataBoundEventArgs> = new EventEmitter<RowDataBoundEventArgs>();

  public filteringSettings: FilterSettingsModel = {
    type: 'CheckBox'
  };

  constructor() {
  }

  ngOnInit() {
  }

  actionBegin($event: any): void {
    this.onActionBegin.emit($event);
  }

  actionComplete($event: any): void {
    this.onActionComplete.emit($event);
  }

  actionFailure($event: FailureEventArgs): void {
    this.onActionFailure.emit($event);
  }

  dataBound($event: any): void {
    $event.data = this.grid.currentViewData;
    $event.totalRecordCount = this.grid.pageSettings.totalRecordsCount;

    this.onDataBound.emit($event);
  }

  rowDataBound($event: RowDataBoundEventArgs): void {
    this.onRowDataBound.emit($event);
  }

  rowSelected($event: RowSelectEventArgs): void {
    this.onRowSelected.emit($event);
  }

  public clearSorting() {
    this.grid.clearSorting();
  }

  public search(searchText: string): void {
    this.grid.search(searchText);
  }
}
