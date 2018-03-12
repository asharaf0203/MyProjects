import { Component, OnInit, OnDestroy, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Constants } from '../../../shared/constants';

import { Code } from '../../models/code.models';
import { CrawfordSnackbarService, CrawfordPageTitleService, IPageTitle } from '../../../shell/shell.module';
import { NumericBoxSettings } from '../../../controls/numeric-input-box/model/settings.model';
import { ICustomValidation } from '../../../controls/controls.module';
import { dataSource } from '../../../search/data/dataSource';
@Component({
  selector: 'app-code-detail',
  templateUrl: './code-detail.component.html',
  styleUrls: ['./code-detail.component.scss']
})


export class CodeDetailComponent implements OnInit, OnDestroy {

  private sub: any;
  public validationMessages: ICustomValidation[] = [];

  private gridData = [
    new Code(123, '1235', 'This is a description', 'This is a french description', true, 'Test Reference Number 1'),
    new Code(1234, '7432', 'This is a description', 'This is a french description', false, 'Test Reference Number 2')
  ];

  private pageTitle: IPageTitle = {
    title: 'Code Detail'
  };
  data = dataSource;
  fields: Object = { value: 'CrawfordRef', text: 'Policyholder' };
  itemTemplate = `<span>
  <span>Policyholder</span>
  <span>CrawfordRef</span>
</span>`;
  headerTemplate = `<span><span>CrawfordRef</span><span>Policyholder</span></span>`;
  noRecordsTemplate = 'NO DATA AVAILABLE';
  code: Code = new Code();
  codeForm: FormGroup;
  public showValidationSummary: boolean;
  numericBoxSettings: NumericBoxSettings;
  constructor
    (
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private snackbarService: CrawfordSnackbarService,
    public pageTitleService: CrawfordPageTitleService
    ) {
    this.createCodeForm();
  }

  ngOnInit() {
    this.pageTitleService.set(this.pageTitle);
    this.pageTitleService.registerSave(() => this.save());
    this.pageTitleService.registerClose(() => this.close());
    this.numericBoxSettings = new NumericBoxSettings(100, 1000, {
      currency: 'EUR', step: 1, strictMode: true,
      showSpinButton: true, format: 'c4', validateDecimalOnType: true, decimalsPoint: 3
    });

    this.sub = this.activatedRoute.params.subscribe(params => {
      if (params.id) {
        this.getCode(+params.id); // (+) before `params.id` turns the string into a number
      } else {
        this.setFormValues();
      }
    });
    this.validationMessages.push({
      controlName: 'frenchDescription',
      errorType: 'required',
      customMessage: 'French Description is required and this is a custom validation message'
    });

    this.validationMessages.push({
      controlName: 'date',
      errorType: 'required',
      customMessage: 'date is required and this is a custom validation message'
    });

    this.validationMessages.push({
      controlName: 'name',
      errorType: 'required',
      customMessage: 'Name is required and this is a custom validation message'
    });
    this.validationMessages.push({
      controlName: 'combo',
      errorType: 'required',
      customMessage: 'Combo box is required and this is a custom validation message'
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  onHeaderClick() {
    console.log('Header clicked');
  }

  loadCodeList() {
    this.router.navigate(['/administration/code-maintenance']);
  }

  createCodeForm(): void {
    const defaultDate = new Date();
    defaultDate.setDate(defaultDate.getDate() + 5);
    this.codeForm = this.formBuilder.group({
      code: new FormControl('', [Validators.required, Validators.maxLength(10), Validators.pattern(Constants.ALPHANUMERIC_REGEX)]),
      description: new FormControl('', [Validators.required, Validators.maxLength(50), Validators.pattern(Constants.ALPHANUMERIC_REGEX)]),
      frenchDescription: new FormControl('', [Validators.minLength(5), Validators.pattern(Constants.ALPHANUMERIC_REGEX)]),
      active: new FormControl(''),
      date: new FormControl(defaultDate, Validators.required),
      referenceNumber: new FormControl(''),
      price: new FormControl(0, [Validators.required]),
      name: new FormControl('', [Validators.required]),
      shift: new FormControl('', [Validators.required]),
      combo: new FormControl('', [Validators.required])
    });
  }

  toggleValidation(): void {
    this.codeForm.controls.frenchDescription.clearValidators();
    if (this.codeForm.value.description && this.codeForm.value.description.toLowerCase() === 'french') {
      this.codeForm.controls.frenchDescription.setValidators([Validators.required, Validators.minLength(5), Validators.pattern(Constants.ALPHANUMERIC_REGEX)]);
    } else if (this.codeForm.value.frenchDescription) {
      this.codeForm.controls.frenchDescription.setValidators([Validators.minLength(5), Validators.pattern(Constants.ALPHANUMERIC_REGEX)]);
    }
    this.codeForm.controls.frenchDescription.updateValueAndValidity();
  }

  setFormValues(): void {
    const defaultDate = new Date();
    defaultDate.setDate(defaultDate.getDate() + 10);
    // testing time picker with date after 10 days and time 4:00 am
    const defaultTime = new Date(defaultDate.getFullYear(), defaultDate.getMonth(), defaultDate.getDate(), 16, 0, 0, 0);
    this.codeForm.reset({
      code: this.code.code,
      description: this.code.description,
      frenchDescription: this.code.frenchDescription,
      active: this.code.active,
      date: defaultDate,
      referenceNumber: this.code.referenceNumber,
      shift: defaultTime
    });
  }

  setCodeValues(): void {
    const codeModel = this.codeForm.value;
    this.code.code = codeModel.code;
    this.code.description = codeModel.description;
    this.code.frenchDescription = codeModel.frenchDescription;
    this.code.active = codeModel.active;
    this.code.referenceNumber = codeModel.ReferenceNumber;
  }

  // Get a code value by id
  getCode(codeId: number): void {
    this.code = this.gridData.find(data => data.code === codeId.toString());
    this.setFormValues();
    this.snackbarService.displayInfoMessage('Code Detail Loaded: ' + this.code.description);
    // this.service.getCodeById(codeId).subscribe(
    //   (foundCode) => {
    //     if (foundCode) {
    //       this.code = foundCode;
    //       this.setFormValues();
    //     } else {
    //       // no code found with id
    //     }
    //   },
    //   (error) => console.log(error) // handle any error thrown with the get.
    // );
  }

  close(): void {
    this.loadCodeList();
  }

  // Saves the code
  // then resets the form and navigates back to the code list
  save(): void {
    console.log(this.codeForm.controls);
    if (this.codeForm.valid && this.codeForm.dirty) {
      this.setCodeValues();
      this.saveCode().then(codeId => {
        if (codeId) {
          this.snackbarService.displaySuccessMessage('Successfully Save Code: ' + this.code.description);
          this.codeForm.reset();
          this.loadCodeList();
        } else {
          this.snackbarService.displayErrorMessage('Code could not saved, please try again');
        }
      }).catch(error => console.log(error)); // handle any error thrown with the get.
    } else {
      this.snackbarService.displayErrorMessage('Code is invalid so cannot be saved');
    }
  }

  // adds or updates the client fund
  saveCode(): Promise<number> {
    const promise: Promise<number> = new Promise((resolve, reject) => {
      // if (this.code.id === 0) {
      //   this.service.add(this.code).subscribe(
      //     (newCode) => resolve(newCode.id),
      //     (error) => console.log(error) // handle any error thrown with the get.
      //   );
      // } else {
      //   this.service.update(this.code).subscribe(
      //     (success) => resolve(this.code.id),
      //     (error) =>  console.log(error) // handle any error thrown with the get.
      //   );
      // }
      resolve(1);
    });
    return promise;
  }

  delete(): void {
    // Display dialog saying Are you sure you want to delete this item?
    // if the users selects yes
    // this.service.delete(this.code).subscribe(
    //   (success) => {
    //     console.log('Code Deleted.');
    //     this.loadCodeList();
    //   },
    //   (error) => console.log(error) // handle any error thrown with the get.
    // );
  }


  // Function to check whether to deactivate a change in route
  // checks if the form is dirty to be sure unsaved changes are not lost
  canDeactivate(): Promise<boolean> {
    const promise: Promise<boolean> = new Promise((resolve, reject) => {
      if (this.codeForm.dirty) {
        this.snackbarService.displayWarningMessage('Unsaved changes');
        // Display dialog saying You have unsaved changes on this page.
        // Do you want to leave this page and discard your changes or stay on this page?
        // if clicks yes then resolve true
        // otherwise resolve false
        resolve(false); // false will prevent the user from navigating away from the page
      } else {
        this.codeForm.reset();
        resolve(true); // true will allow the user to navigate away from the page
      }
    });
    return promise;
  }
}
