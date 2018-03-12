import { Component, OnInit, ViewChild } from '@angular/core';
import { PagingSettings } from '../controls/grid/model/settings.model';

import { IPageTitle } from '../shell-services/shell-services.module';
import { GridColumn } from '../controls/grid/model/grid-column.model';

import {dataSource} from './data/dataSource';
import { SimpleSearchResult } from './models/SimpleSearchResult';
import { CrawfordGridComponent } from '../controls/grid/grid.component';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  @ViewChild('ccogrid') public ccoGrid: CrawfordGridComponent;

  private pageTitle: IPageTitle = {
    title: 'Claim Search'
  };

  gridData: SimpleSearchResult[] = [];
  data: SimpleSearchResult[] = dataSource;
  sortingSettings: any = {};

  displayColumns: GridColumn[] = [
    new GridColumn('CrawfordRef', 'Crawford Reference'),
    new GridColumn('Policyholder', 'Policyholder'),
    new GridColumn('PolicyholderPostcode', 'Policyholder Postcode'),
    new GridColumn('LossPostcode', 'Loss Postcode'),
    new GridColumn('LossDate', 'Loss Date', { format: { type: 'date', format: 'dd/MM/yyyy' } }),
    new GridColumn('InstructionDate', 'Instruction Date', { format: { type: 'date', format: 'dd/MM/yyyy' } }),
    new GridColumn('PerilDescription', 'Peril Desctiption'),
    new GridColumn('Status', 'Current Status'),
    new GridColumn('Client', 'Client'),
    new GridColumn('Insurer', 'Insurer')
  ];


  gridPageSettings: PagingSettings = {
    pageSize: 20
  };

  SEARCH_REGEX = /^[A-Za-z\d\s,\\\/\-_']+$/;
  searchDesc = 'Searching on Crawford Reference, Policyholder Name, Policyholder Postcode, Loss Location Postcode, Client and Insurer';
  patternDesc= 'Only alphanumeric characters and some special characters (, \\ / - \' _) are allowed';

  constructor() {
  }

  ngOnInit() { }

  search(searchText: string): void {
    console.log('Searching... ' + searchText);
    this.gridData = this.data.filter(item => {
      if (!searchText) {
        this.resetSortingSettings();
        return true;
      } else if (item.Policyholder.toLowerCase().includes(searchText.toLowerCase()) ||
        item.CrawfordRef.toLowerCase().includes(searchText.toLowerCase()) ||
        item.LossPostcode && item.LossPostcode.replace(' ', '').toLowerCase().includes(searchText.replace(' ', '').toLowerCase()) ||
        item.PolicyholderPostcode && item.PolicyholderPostcode.toLowerCase().includes(searchText.toLowerCase()) ||
        item.Client && item.Client.toLowerCase().includes(searchText.toLowerCase()) ||
        item.Insurer && item.Insurer.toLowerCase().includes(searchText.toLowerCase())) {
          return true;
        } else {
          return false;
        }
    });

    this.resetSortingSettings();
  }

  resetSortingSettings() {
    this.ccoGrid.clearSorting();
    this.sortingSettings = {
      columns: [{ field: 'InstructionDate', direction: 'descending'}]
    };
  }

  logGridAction(message: string) {
    console.log(message);
  }
}
