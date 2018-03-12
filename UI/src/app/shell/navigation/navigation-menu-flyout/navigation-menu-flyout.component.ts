import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { INavigationMenuItem } from '../../../shell-services/shell-services.module';

@Component({
  selector: 'cco-navigation-menu-flyout',
  templateUrl: './navigation-menu-flyout.component.html',
  styleUrls: ['./navigation-menu-flyout.component.scss']
})
export class CrawfordNavigationMenuFlyoutComponent implements OnInit {
  @Input() navMenuItem: INavigationMenuItem;
  @Output() navChildClick: EventEmitter<null> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onNavChildClick(): void {
    this.navChildClick.emit();
  }
}
