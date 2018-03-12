import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup,  FormControl, AbstractControl } from '@angular/forms';
import { ICustomValidation } from '../validation/model/validation.model';

@Component({
  selector: 'cco-textbox',
  templateUrl: './textbox.component.html',
  styleUrls: ['./textbox.component.scss']
})
export class CrawfordTextboxComponent implements OnInit {
  @Input() label: string;
  @Input() name: string;
  @Input() required: boolean;
  @Input() group: FormGroup;
  @Input() allowClear: boolean;
  @Input() actionIcon: string;
  @Input() actionOnEnter: boolean;
  @Input() validationMessages: ICustomValidation[];

  @Output() actionClick: EventEmitter<any> = new EventEmitter<any>();

  isRequired: boolean;
  labelTop: boolean;
  labelBottom: boolean;
  inputFocus: boolean;
  control: AbstractControl;

  constructor() {}

  ngOnInit() {
    this.updateLabelState();
    this.control = this.group.controls[this.name];
  }

  public getLabel(): string {
    if (this.control.validator) {
      const validator = this.control.validator(new FormControl());
      if (validator && validator.required) {
        this.isRequired = true;
        return this.label + ' *';
      }
    }
    this.isRequired = false;
    return this.label;
  }

  public clear(): void {
    this.control.reset();
    this.control.markAsTouched();
    this.updateLabelState();
  }

  public onClick(): void {
    this.actionClick.emit();
  }

  public inputKeyDownFunction(event) {
    if (this.actionOnEnter && event.keyCode === 13) {
      this.onClick();
    }
  }

  public clearKeyDownFunction(event) {
    if (event.keyCode === 13) {
      this.clear();
    }
  }

  public actionKeyDownFunction(event) {
    if (event.keyCode === 13) {
      this.onClick();
    }
  }

  public focusIn(): void {
    this.inputFocus = true;
  }

  public focusOut(): void {
    this.inputFocus = false;
    this.updateLabelState();
  }

  public onInput(): void {
    this.updateLabelState();
  }

  public updateLabelState() {
    let hasValue: boolean;

    if (this.group.value[this.name]) {
      hasValue = true;
    } else {
      hasValue = false;
    }

    this.labelTop = hasValue;
    this.labelBottom = !hasValue;
  }
}

