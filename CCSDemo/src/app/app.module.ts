import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ShellModule, CrawfordControlsModule} from 'crawford-shell';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ComboBoxModule } from '@syncfusion/ej2-ng-dropdowns';
import { CheckBoxModule  } from '@syncfusion/ej2-ng-buttons';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppRoutingModule } from './app-routing.module';
import { GridComponent } from './grid/grid.component';
import { ComboComponent } from './combo/combo.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    GridComponent,
    ComboComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    ShellModule.forRoot(),
    CrawfordControlsModule.forRoot(),
    AppRoutingModule,
    ComboBoxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
