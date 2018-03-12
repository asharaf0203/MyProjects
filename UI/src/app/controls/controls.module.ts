import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ModuleWithProviders } from '@angular/compiler/src/core';

import { GridModule, PageService, SortService, FilterService, SearchService, PagerModule } from '@syncfusion/ej2-ng-grids';
import { DatePickerModule, TimePickerModule } from '@syncfusion/ej2-ng-calendars';
import { NumericTextBoxComponent } from '@syncfusion/ej2-ng-inputs';
import { AutoCompleteModule, ComboBoxModule } from '@syncfusion/ej2-ng-dropdowns';

import { CrawfordAccordionComponent } from './accordion/accordion.component';
import { CrawfordTextboxComponent } from './textbox/textbox.component';
import { CrawfordSlideToggleComponent } from './slide-toggle/slide-toggle.component';
import { CrawfordGridComponent } from './grid/grid.component';
import { CrawfordSearchBoxComponent } from './search-box/search-box.component';
import { CrawfordSnackbarService } from '../shell-services/shell-services.module';
import { CrawfordValidationService } from './validation/service/validation.service';
import { CrawfordValidationSummaryComponent } from './validation/validation-summary/validation-summary.component';
import { CrawfordControlValidationComponent } from './validation/control-validation/control-validation.component';
import { CrawfordDatePickerComponent } from './date-picker/date-picker.component';
import { CrawfordNumericBoxComponent } from './numeric-input-box/numeric-input-box.component';
import { CrawfordAutoCompleteComponent } from '../controls/auto-complete/auto-complete.component';
import { CrawfordTimePickerComponent } from './time-picker/time-picker.component';
import {CrawfordComboBoxComponent} from './combo/combo.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    GridModule,
    DatePickerModule,
    AutoCompleteModule,
    TimePickerModule,
    ComboBoxModule
  ],
  declarations: [
    NumericTextBoxComponent,
    CrawfordAccordionComponent,
    CrawfordTextboxComponent,
    CrawfordSlideToggleComponent,
    CrawfordGridComponent,
    CrawfordSearchBoxComponent,
    CrawfordValidationSummaryComponent,
    CrawfordControlValidationComponent,
    CrawfordDatePickerComponent,
    CrawfordNumericBoxComponent,
    NumericTextBoxComponent,
    CrawfordAutoCompleteComponent,
    CrawfordTimePickerComponent,
    CrawfordComboBoxComponent
  ],
  exports: [
    CrawfordAccordionComponent,
    CrawfordTextboxComponent,
    CrawfordSlideToggleComponent,
    CrawfordGridComponent,
    CrawfordSearchBoxComponent,
    CrawfordValidationSummaryComponent,
    CrawfordControlValidationComponent,
    CrawfordDatePickerComponent,
    CrawfordControlValidationComponent,
    CrawfordNumericBoxComponent,
    CrawfordAutoCompleteComponent,
    CrawfordTimePickerComponent,
    CrawfordComboBoxComponent
  ],
  providers: [
    CrawfordValidationService,
    PageService,
    SortService,
    FilterService,
    PagerModule,
    SearchService
  ]
})
export class CrawfordControlsModule {
}
export { CrawfordAutoCompleteComponent } from '../controls/auto-complete/auto-complete.component';
export * from './auto-complete/model/auto-complete.settings.model';
export { CrawfordAccordionComponent } from './accordion/accordion.component';
export { CrawfordGridComponent } from './grid/grid.component';
export { GridColumn } from './grid/model/grid-column.model';
export * from './grid/model/settings.model';
export * from './grid/model/format-options.model';
export { CrawfordSearchBoxComponent } from './search-box/search-box.component';
export { CrawfordSlideToggleComponent } from './slide-toggle/slide-toggle.component';
export { CrawfordTextboxComponent } from './textbox/textbox.component';
export { CrawfordValidationService } from './validation/service/validation.service';
export { ICustomValidation } from './validation/model/validation.model';
export { CrawfordValidationSummaryComponent } from './validation/validation-summary/validation-summary.component';
export { CrawfordControlValidationComponent } from './validation/control-validation/control-validation.component';
export { CrawfordDatePickerComponent } from './date-picker/date-picker.component';
export { CrawfordNumericBoxComponent } from './numeric-input-box/numeric-input-box.component';
export { NumericBoxSettings } from './numeric-input-box/model/settings.model';

export { CrawfordTimePickerComponent } from './time-picker/time-picker.component';
export {CrawfordComboBoxComponent} from './combo/combo.component';


