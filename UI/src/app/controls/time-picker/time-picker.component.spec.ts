import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TimePickerComponent } from '@syncfusion/ej2-ng-calendars';
import { CrawfordTimePickerComponent } from './time-picker.component';
import { FormGroup, FormControl, Validators, FormsModule, ReactiveFormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Component, CUSTOM_ELEMENTS_SCHEMA, forwardRef } from '@angular/core';
describe('TimePickerComponent', () => {
  let component: CrawfordTimePickerComponent;
  let fixture: ComponentFixture<CrawfordTimePickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CrawfordTimePickerComponent, TestHostComponent, TimePickerComponent]
      , schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [
        FormsModule,
        ReactiveFormsModule,

      ],
      providers: [
        {
          provide: NG_VALUE_ACCESSOR,
          multi: true,
          useExisting: forwardRef(() => CrawfordTimePickerComponent),
        }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrawfordTimePickerComponent);
    component = fixture.debugElement.children[0].componentInstance;
    // component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    console.log(component);
    expect(component).toBeTruthy();
  });

  @Component({
    // tslint:disable-next-line:component-selector
    selector: `host-component`,
    template: `<cco-time-picker name='shift' [group]='codeForm' label='shift' [allowClear]='true' width='595' ></cco-time-picker>`,
    providers: [
      {
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => TestHostComponent),
        multi: true
      }
    ]
  })
  class TestHostComponent {
    public codeForm: FormGroup = new FormGroup({
      shift: new FormControl()
    });
  }
});
