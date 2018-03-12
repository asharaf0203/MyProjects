import { Injectable } from '@angular/core';
import { IPageHeader } from '../model/page-header.model';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { CrawfordBaseService } from '../../base-service/base.service';

@Injectable()
export class CrawfordPageHeaderService extends CrawfordBaseService<IPageHeader> {
  constructor() {
    super();
    this.default = { header: '' };
  }
}
