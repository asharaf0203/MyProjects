import { NgModule } from '@angular/core';

import { AdministrationRoutingModule } from './administration-routing.module';

import { ShellModule } from '../shell/shell.module';

import { CodeDetailComponent } from './code-maintenance/code-detail/code-detail.component';
import { CodeListComponent } from './code-maintenance/code-list/code-list.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CrawfordControlsModule } from '../controls/controls.module';

@NgModule({
  declarations: [
    CodeDetailComponent,
    CodeListComponent
  ],
  imports: [
    AdministrationRoutingModule,
    CrawfordControlsModule,
    ShellModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ ]
})
export class AdministrationModule { }
