import { Component, AfterViewInit, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { enableRipple, rippleEffect, RippleOptions } from '@syncfusion/ej2-base';

@Component({
  selector: 'cco-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss']
})
export class CrawfordAccordionComponent implements AfterViewInit {
  @Input() header: string;

  @Output() headerClick: EventEmitter<any> = new EventEmitter<any>();

  @ViewChild('ripple') accordion: ElementRef;

  expanded = false;

  constructor() { }

  ngAfterViewInit() {
    enableRipple(true);
    const options: RippleOptions = {
      ignore: '.accordion-content'
    };
    rippleEffect(this.accordion.nativeElement, options);
  }

  toggle(): void {
    this.expanded = !this.expanded;
  }

  onHeaderClick(): void {
    this.headerClick.emit();
    this.toggle();
  }
}

