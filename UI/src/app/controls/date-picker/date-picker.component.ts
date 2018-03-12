import { Component, Input, ViewEncapsulation } from '@angular/core';
import { FormGroup, AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { ICustomValidation } from '../controls.module';

@Component({
  selector: 'cco-datepicker',
  templateUrl: './date-picker.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./date-picker.component.scss'],
})
export class CrawfordDatePickerComponent {

  private date: Date;

  @Input() group: FormGroup;
  @Input() name: string;
  @Input() label: string;
  @Input() format: string;
  @Input() min: Date;
  @Input() max: Date;
  @Input() showClear: boolean;
  @Input() validationMessages: ICustomValidation[];

  control: AbstractControl;

  constructor() {
    this.init();
  }

  /**
   * Workaround to handle validation breaking on clear button click,
   * ejs-datepicker is not clearing formControl's value
   */
  onBlur(event) {
    if (event && event.target && event.target.value === '') {
      this.control.patchValue('');
    }
  }

  /**
   * Initializing inputs to default values;
   */
  private init(): void {
    this.format = 'dd-MMM-yy';
    this.date = new Date();
    this.min = new Date();
    this.max = new Date();
    this.max.setDate(this.max.getDate() + Number.MAX_SAFE_INTEGER);
    this.showClear = false;
  }

  /**
   * Appends asterisk(*) on the label if  [control] is having
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
}
