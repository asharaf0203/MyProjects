import { async, ComponentFixture, TestBed, fakeAsync, discardPeriodicTasks, tick } from '@angular/core/testing';

import { CrawfordDatePickerComponent } from './date-picker.component';
import { CrawfordControlsModule } from '../../../../public_api';
import { DatePickerModule } from '@syncfusion/ej2-ng-calendars';
import { FormsModule, ReactiveFormsModule, FormControl } from '@angular/forms';
import { CrawfordControlValidationComponent } from '../controls.module';
import { FormGroup } from '@angular/forms';
import { CrawfordValidationService } from '../validation/service/validation.service';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

describe('DatePickerComponent', () => {
  let component: CrawfordDatePickerComponent;
  let fixture: ComponentFixture<CrawfordDatePickerComponent>;
  let debugElement: DebugElement;
  let htmlElement: HTMLElement;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CrawfordDatePickerComponent, CrawfordControlValidationComponent],
      imports: [DatePickerModule, FormsModule, ReactiveFormsModule],
      providers: [CrawfordValidationService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrawfordDatePickerComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
    htmlElement = fixture.nativeElement;
    fixture.detectChanges();
  });

  it('Should create component', () => {
    expect(component).toBeTruthy();
  });

  it('Should create DatePicker view', () => {
    const datePickerControl = new FormControl();
    const formGroup = new FormGroup({ control: datePickerControl });
    component.group = formGroup;
    component.label = 'A Control';
    component.name = 'control';
    fixture.detectChanges();
    expect(component.getLabel()).toBeTruthy();
  });

  it('Should have default date', fakeAsync(() => {
    const datePickerControl = new FormControl();
    const formGroup = new FormGroup({ control: datePickerControl });
    component.group = formGroup;
    component.label = 'A Control';
    component.name = 'control';
    fixture.detectChanges();
    tick(1000);
    const defaultDate = htmlElement.getElementsByTagName('input').item(0);
    console.log('htmlElement', defaultDate);
    console.log('debugElement', debugElement);
    expect(defaultDate).toBeTruthy();
    discardPeriodicTasks();
  }));
});
