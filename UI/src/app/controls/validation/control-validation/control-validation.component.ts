import { Component, OnInit, Input } from '@angular/core';
import { NgIf } from '@angular/common';
import { FormGroup, AbstractControl, ValidationErrors } from '@angular/forms';

import { CrawfordValidationService } from '../service/validation.service';
import { ICustomValidation } from '../model/validation.model';

@Component({
  selector: 'cco-control-validation',
  templateUrl: './control-validation.component.html',
  styleUrls: ['./control-validation.component.scss']
})
export class CrawfordControlValidationComponent implements OnInit {

  @Input() group: FormGroup;
  @Input() control: AbstractControl;
  @Input() controlName: string;
  @Input() validationMessages: ICustomValidation[];

  public validationErrors = [];

  constructor(private validationService: CrawfordValidationService) { }

  ngOnInit() {
    this.updateValidationErrors();

    this.control.valueChanges.subscribe(data => {
      this.updateValidationErrors();
    });
  }

  updateValidationErrors(): void {
    this.validationErrors = this.validationService.getControlValidationErrors(this.control, this.controlName, this.validationMessages);
  }

  showValidation(): boolean {
    return this.control.invalid && this.validationErrors.length > 0 && (this.control.dirty || this.control.touched);
  }
}
