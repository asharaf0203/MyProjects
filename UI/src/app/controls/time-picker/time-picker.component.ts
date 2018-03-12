import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { FormGroup, AbstractControl, ValidatorFn, ValidationErrors } from '@angular/forms';
import { ICustomValidation } from '../controls.module';

@Component({
  selector: 'cco-time-picker',
  templateUrl: './time-picker.component.html',
  styleUrls: ['./time-picker.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CrawfordTimePickerComponent implements OnInit {

  @Input() group: FormGroup;
  @Input() name: string;
  @Input() label: string;
  @Input() min: Date;
  @Input() max: Date;
  @Input() format: string;
  @Input() step: number;
  @Input() allowClear: boolean;
  @Input() validationMessages: ICustomValidation[];

  control: AbstractControl;

  constructor() {
    this.init();
  }

  /**
   * Initialize properties
   */
  private init(): void {
    const ref = new Date();
    this.min = new Date(ref.getFullYear(), ref.getMonth(), ref.getDate(), 0, 0, 0, 0);
    this.max = new Date(ref.getFullYear(), ref.getMonth(), ref.getDate(), 23, 59, 59, 999);
    this.format = 'h:mm a';
    this.step = 30;
    this.allowClear = false;
  }

  ngOnInit() {
    this.control = this.group.controls[this.name];
  }

  onBlur(event) {
    if (event && event.target && event.target.value === '') {
      this.control.patchValue('');
    }
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

  hasError(): boolean {
    return !this.control.valid && this.control.touched;
  }
}
