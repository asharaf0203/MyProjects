import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'cco-slide-toggle',
  templateUrl: './slide-toggle.component.html',
  styleUrls: ['./slide-toggle.component.scss']
})
export class CrawfordSlideToggleComponent implements OnInit {

  @Input() label: string;
  @Input() name: string;
  @Input() group: FormGroup;
  @Input() checked: boolean;

  constructor() { }

  ngOnInit() {
    // console.log('Checked Value: ' + this.checked);
  }
}
