import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CrawfordShellService } from '../shell-services/shell-services.module';

@Component({
  selector: 'cco-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CrawfordShellComponent implements OnInit {

  constructor(
    private shellService: CrawfordShellService
  ) { }

  ngOnInit() {
  }

}
