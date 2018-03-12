import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Code } from '../code';
import { CrawfordPageTitleService, IPageTitle } from 'crawford-shell';
import { Constants } from '../constants';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  codeForm: FormGroup;
  comboData: any;
  // code: Code = new Code();
   // define the JSON of data
public sportsData: Object[] = [
  { Id: 'Game1', Game: 'American Football' },

  { Id: 'Game3', Game: 'Basketball' },
  { Id: 'Game4', Game: 'Cricket' },
  { Id: 'Game5', Game: 'Football' },
  { Id: 'Game6', Game: 'Golf' },
  { Id: 'Game7', Game: 'Hockey' },
  { Id: 'Game8', Game: 'Rugby' },
  { Id: 'Game9', Game: 'Snooker' },
  { Id: 'Game2', Game: 'Badminton' },
  { Id: 'Game10', Game: 'Tennis' }
];
// maps the appropriate column to fields property
//public fields: Object;
// set the height of the popup element
public height: string = '0px';
public width: string = '550px';
// set the value to select an item based on mapped value at initial rendering
public value: string = 'Game3';
// set the placeholder to ComboBox input element
public waterMark: string = 'Select a game or type';
public sorting: string = 'Ascending';
  constructor(private formBuilder: FormBuilder, private pageTitleService: CrawfordPageTitleService) { }

  ngOnInit() {
    this.createCodeForm();
    this.pageTitleService.registerSave(() => this.save());
  }
  createCodeForm(): void {
    this.codeForm = this.formBuilder.group({
      code: new FormControl('', [Validators.required, Validators.maxLength(10)]),
      description: new FormControl('', [Validators.required, Validators.maxLength(50)]),
      frenchDescription: new FormControl(),
      active: new FormControl(''),
      game: new FormControl('', [Validators.required])
    });
  }
  save(): void {

this.comboData = this.codeForm.controls.game.value;
if (this.comboData) {
  alert('Saved btn Clicked !! Value Of ComboBox Is: ' + this.comboData);
  console.log(this.comboData);
} else {
  alert('Saved btn Clicked !! Value Of ComboBox Is: null');
}

      }

}
