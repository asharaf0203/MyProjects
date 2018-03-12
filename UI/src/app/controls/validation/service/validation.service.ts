import { Injectable } from '@angular/core';
import { FormGroup, AbstractControl, ValidationErrors } from '@angular/forms';

import { ICustomValidation } from '../model/validation.model';

@Injectable()
export class CrawfordValidationService  {

  private customValidaitonMessages: ICustomValidation[];
  private controlName: string;

public getFormValidationErrors(group: FormGroup, customValidaitonMessages: ICustomValidation[]): string[] {
  let validationErrors: string[] = [];
  Object.keys(group.controls).forEach(control => {
    const controlErrors: string[] = this.getControlValidationErrors(group.get(control), control, customValidaitonMessages);
    validationErrors = validationErrors.concat(controlErrors);
    });
  return validationErrors;
}

  public getControlValidationErrors(control: AbstractControl, controlName: string, customValidaitonMessages: ICustomValidation[]): string[] {
    const controlValidationErrors: string[] = [];
    const controlErrors: ValidationErrors = control.errors;
    this.customValidaitonMessages = customValidaitonMessages;
    this.controlName = controlName;
    const name = controlName.substring(0, 1).toUpperCase() + controlName.substring(1) + ' ';
    if (controlErrors != null) {
      Object.keys(controlErrors).forEach(keyError => {
        const errorText = this.getErrorText(name, keyError, controlErrors[keyError]);
        controlValidationErrors.push(errorText);
      });
    }
    return controlValidationErrors;
  }

  private getErrorText(controlName: string, errorType: string, errorDetail: ValidationErrors): string {
    const customMessage = this.checkForCustomMessage(errorType);
    if (customMessage) {
      return customMessage;
    }

    switch (errorType) {
      case('required'):
        return controlName + 'is required';
      case('maxlength'):
        return controlName + 'has a maximum length of ' + errorDetail.requiredLength;
      case('minlength'):
        return controlName + 'has a minimum length of ' + errorDetail.requiredLength;
      case('pattern'):
        return controlName + 'has invalid characters';
      default:
        return controlName + 'is invalid';
    }
  }

  private checkForCustomMessage(errorType: string): string {
    let customMessage = null;
    if (this.customValidaitonMessages) {
      this.customValidaitonMessages.forEach(message => {
        if (message.controlName === this.controlName && message.errorType === errorType) {
          customMessage = message.customMessage;
        }
      });
    }
    return customMessage;
  }

}
