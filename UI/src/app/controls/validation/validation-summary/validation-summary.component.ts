import { Component, OnInit, Input } from '@angular/core';
import { NgIf } from '@angular/common';
import { FormGroup, ValidationErrors } from '@angular/forms';

import { CrawfordPageTitleService } from '../../../shell-services/shell-services.module';
import { CrawfordValidationService } from '../service/validation.service';
import { ICustomValidation } from '../model/validation.model';

@Component({
  selector: 'cco-validation-summary',
  templateUrl: './validation-summary.component.html',
  styleUrls: ['./validation-summary.component.scss']
})
export class CrawfordValidationSummaryComponent implements OnInit {

  @Input() group: FormGroup;
  @Input() pageTitleService: CrawfordPageTitleService;
  @Input() validationMessages: ICustomValidation[];

  public show: boolean;

  public validationErrors = [];

  constructor(private validationService: CrawfordValidationService) { }

  ngOnInit() {
    this.pageTitleService.save.subscribe(data => {
      this.show = true;
      this.validationErrors = this.validationService.getFormValidationErrors(this.group, this.validationMessages);
    });

    this.group.valueChanges.subscribe(data => {
        if (this.show && this.group.valid) {
          this.show = false;
        }
        this.validationErrors = this.validationService.getFormValidationErrors(this.group, this.validationMessages);
      });
  }

}
