import { Injectable } from '@angular/core';
import { IPageFooter } from '../model/page-footer.model';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { CrawfordBaseService } from '../../base-service/base.service';

@Injectable()
export class CrawfordPageFooterService extends CrawfordBaseService<IPageFooter> {
  constructor() {
    super();
    this.default = { footer: '' };
  }
}
