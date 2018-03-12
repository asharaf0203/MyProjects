import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrawfordNumericBoxComponent } from './numeric-input-box.component';
import { FormGroup, FormControl, Validators, FormsModule, ReactiveFormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Component, CUSTOM_ELEMENTS_SCHEMA, forwardRef } from '@angular/core';
import { NumericTextBoxComponent } from '@syncfusion/ej2-ng-inputs';
describe('NumericInputBoxComponent', () => {
  let component: TestHostComponent;
  let fixture: ComponentFixture<TestHostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CrawfordNumericBoxComponent, TestHostComponent, NumericTextBoxComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [
        FormsModule,
        ReactiveFormsModule
      ],
      providers: [
        {
          provide: NG_VALUE_ACCESSOR,
          multi: true,
          useExisting: forwardRef(() => CrawfordNumericBoxComponent),
        }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestHostComponent);
    component = fixture.debugElement.children[0].componentInstance;
    // component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should control name is "price" ', () => {
    expect(component['name']).toEqual('price');
  });

  @Component({
    // tslint:disable-next-line:component-selector
    selector: `host-component`,
    template: ` <cco-numericbox  [group]='codeForm' name='price' lable='price' [allowClear]='true' ></cco-numericbox>`,
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
      price: new FormControl(100, [Validators.required])
    });
  }
});
