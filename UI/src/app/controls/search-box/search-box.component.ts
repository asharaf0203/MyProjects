import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

import { ICustomValidation } from '../validation/model/validation.model';

@Component({
  selector: 'cco-crawford-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss']
})
export class CrawfordSearchBoxComponent implements OnInit {
  @Input() description: string;
  @Input() patternDescription: string;
  @Input() searchRegex;

  @Output() search: EventEmitter<string> = new EventEmitter<string>();

  public simpleSearchForm: FormGroup;
  public validationMessages: ICustomValidation[] = [];

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.createSimpleSearchForm();
    this.validationMessages.push({
      controlName: 'search',
      errorType: 'pattern',
      customMessage: this.patternDescription
    });
  }

  public createSimpleSearchForm(): void {
    this.simpleSearchForm = this.formBuilder.group({
      search: new FormControl('', Validators.pattern(this.searchRegex))
    });
  }

  public onSearch(): void {
    if (this.simpleSearchForm.valid) {
      this.search.emit(this.simpleSearchForm.value.search);
    }
  }
}
