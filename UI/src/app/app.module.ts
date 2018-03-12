import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShellModule } from './shell/shell.module';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AdministrationModule } from './administration/administration.module';
import { PageNotFoundModule } from './shared/page-not-found/page-not-found.module';
import { SearchComponent } from './search/search.component';
import { CrawfordControlsModule } from './controls/controls.module';


@NgModule({
  declarations: [
    AppComponent,
    // These components are samples of how to use some of our controls - not required for production
    WelcomeComponent,
    SearchComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    CrawfordControlsModule,
    AppRoutingModule,
    AdministrationModule,
    ShellModule.forRoot(),
    PageNotFoundModule // this must be last
  ],
  providers: [
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
