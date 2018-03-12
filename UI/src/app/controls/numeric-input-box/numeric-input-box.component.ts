import { Component, OnInit, Input, EventEmitter, Output, SimpleChanges, ViewEncapsulation } from '@angular/core';
import { inputs } from '@syncfusion/ej2-ng-grids/src/pager/pager.component';
import { NumericBoxSettings } from './model/settings.model';
import { FormGroup, Validators, FormControl, FormBuilder, AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { ICustomValidation } from '../controls.module';

@Component({
  selector: 'cco-numericbox',
  templateUrl: './numeric-input-box.component.html',
  styleUrls: ['./numeric-input-box.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CrawfordNumericBoxComponent implements OnInit {

  @Input() width: number | string;
  @Input() numericBoxSettings: NumericBoxSettings = new NumericBoxSettings(0, null);
  @Input() enableReadonly: boolean;
  @Input() label: string;
  @Input() name: string;
  @Input() group: FormGroup;
  @Input() allowClear: boolean;
  @Input() validationMessages: ICustomValidation[];

  control: AbstractControl;
  constructor() {

  }

  ngOnInit() {
    this.control = this.group.controls[this.name];
  }

  getLabel(): string {
    return this.hasValidatorRequired() ? `${this.label} *` : this.label;
  }

  private hasValidatorRequired(): boolean {
    if (!this.control) { this.control = this.group.get(this.name); }
    const validatorFn: ValidatorFn = this.control.validator;
    if (validatorFn) {
      const validationErrors: ValidationErrors = validatorFn({} as AbstractControl);
      if (validationErrors && validationErrors.required) { return true; }
    }
    return false;
  }

  public clear(): void {
    this.control.patchValue('');
    this.control.markAsTouched();
  }

}
