import {
  AbstractControl,
  FormGroup,
  ValidationErrors,
  ValidatorFn
} from '@angular/forms';
import {
  Component,
  Input,
  OnInit,
  ViewEncapsulation
} from '@angular/core';
import { ICustomValidation } from '../validation/model/validation.model';
import { Query } from '@syncfusion/ej2-data';
import { AutoCompleteFieldSettings, sortingOrder } from './model/auto-complete.settings.model';
import { FilteringArgs } from '@syncfusion/ej2-ng-dropdowns';

@Component({
  selector: 'cco-autocomplete',
  templateUrl: './auto-complete.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./auto-complete.component.scss']
})

export class CrawfordAutoCompleteComponent implements OnInit {

  // required
  @Input() public group: FormGroup;
  @Input() public name: string;
  @Input() public fields: AutoCompleteFieldSettings;
  @Input() public label: string;
  @Input() public dataSource: any;

  @Input() public itemTemplate: string;
  @Input() public headerTemplate: string;
  @Input() public noRecordsTemplate: string;
  // not required
  @Input() public allowClear = true;
  @Input() public height = '300px';
  @Input() public sortOrder = sortingOrder.Ascending;
  @Input() public enabled = true;
  @Input() validationMessages: ICustomValidation[];
  @Input() public query: Query;

  control: AbstractControl;
  highlight = true;

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

  ngOnInit() {
    this.control = this.group.controls[this.name];
    if (this.itemTemplate) {
      this.highlight = false;
    }
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
