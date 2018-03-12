import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { FormGroup} from '@angular/forms';
@Component({
  selector: 'app-combo',
  templateUrl: './combo.component.html',
  styleUrls: ['./combo.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class ComboComponent implements OnInit {
  @Input() group: FormGroup;
  @Input() dataSource: Object[];
  @Input() name: string;
  @Input() label: string;
  @Input() fields: Object;
  @Input() height: string;
  @Input() value: string;
  @Input() waterMark: string;
  @Input() width: string;
  @Input() required: boolean;
  @Input() sort: string;
  constructor() { }

  ngOnInit() {
  }

}
