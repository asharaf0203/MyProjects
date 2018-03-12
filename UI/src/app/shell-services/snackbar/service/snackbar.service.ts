import { Injectable } from '@angular/core';
import { ISnackbarDetails } from '../model/snackbar-details.model';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CrawfordSnackbarService {

  private defaultDuration = 3000;
  private defaultSnackbar: ISnackbarDetails = {
    message: ''
  };

  private snackbarSource = new BehaviorSubject<ISnackbarDetails>(this.defaultSnackbar);
  currentSnackbar = this.snackbarSource.asObservable();

  constructor() { }

  public displaySuccessMessage(message: string, action?: string): void {
    const classes = 'success';
    this.showSnackbar(message, action, classes);
  }

  public displayInfoMessage(message: string, action?: string): void {
    const classes = 'info';
    this.showSnackbar(message, action, classes);
  }

  public displayWarningMessage(message: string, action?: string): void {
    const classes = 'warning';
    this.showSnackbar(message, action, classes);
  }

  public displayErrorMessage(message: string, action?: string): void {
    const classes = 'error';
    this.showSnackbar(message, action, classes);
  }

  private showSnackbar(message: string, action: string, classes: string): void {
    const snackbarDetails: ISnackbarDetails = {
      message: message,
      duration: this.defaultDuration,
      classes: classes
    };

    this.snackbarSource.next(snackbarDetails);
  }
}
