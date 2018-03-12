import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { FormGroup, AbstractControl, ValidatorFn, ValidationErrors } from '@angular/forms';
import { ICustomValidation } from 'src/app/controls/validation/model/validation.model';
import { FilteringArgs } from '@syncfusion/ej2-ng-dropdowns';
import { Query } from '@syncfusion/ej2-data';

@Component({
  selector: 'cco-combobox',
  templateUrl: './combo.component.html',
  styleUrls: ['./combo.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CrawfordComboBoxComponent implements OnInit {
  @Input() group: FormGroup;
  @Input() dataSource: any;
  @Input() name: string;
  @Input() label: string;
  @Input() fields: Object;
  @Input() public height = '300';
  @Input() value: string;
  @Input() waterMark: string;
  @Input() width: string;
  @Input() public itemTemplate: string;
  @Input() public headerTemplate: string;
  @Input() public noRecordsTemplate: string;
  @Input() validationMessages: ICustomValidation[];
  sorting: string = 'Ascending';
  control: AbstractControl;
  constructor() { }

  ngOnInit() {
    this.control = this.group.controls[this.name];

  }
  getItemTemplate(data) {
    let temp = this.itemTemplate;
    Object.keys(data).forEach(keyItem => {
      temp = temp.replace(keyItem, data[keyItem]);
    });
    return temp;
  }
  getHeaderTemplate() {
    return this.headerTemplate;
  }
  getNoRecordsTemplate() {
    return this.noRecordsTemplate;
  }
  onFiltering(event: FilteringArgs) {
    const filterText = event.text;
    if (filterText === '') {
      event.updateData(this.dataSource);
    } else {
      let query: Query = new Query();
      query = (filterText !== '') ? query.where(this.fields['text'], 'Contains', filterText, true) : query;
      event.updateData(this.dataSource, query);
    }
  }
   /**
  * Appends asterisk(*) on the label if [control] is having
  * [Validators.required] validator
  * function
  */
  getLabel(): string {
    return this.hasValidatorRequired() ? `${this.label} *` : this.label;
  }

  /**
  * Checks if [control] is having [Validators.required] validator
  */
  private hasValidatorRequired(): boolean {
    if (!this.control) {
      this.control = this.group.get(this.name);
    }
    const validatorFn: ValidatorFn = this.control.validator;
    if (validatorFn) {
      const validationErrors: ValidationErrors = validatorFn({} as AbstractControl);
      if (validationErrors && validationErrors.required) {
        return true;
      }
    }
    return false;
  }
  hasError(): boolean {
    return !this.control.valid && this.control.touched;
  }
}
