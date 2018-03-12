import { Component, OnInit } from '@angular/core';
import { CrawfordSnackbarService, ISnackbarDetails } from '../../shell-services/shell-services.module';

@Component({
  selector: 'cco-snack-bar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.scss']
})
export class CrawfordSnackbarComponent implements OnInit {

  snackbarDetails: ISnackbarDetails;
  visible = false;
  private hideTimeout;

  constructor(private snackbarService: CrawfordSnackbarService) { }

  ngOnInit() {
    this.snackbarService.currentSnackbar.subscribe(snackbarDetails => this.showMessage(snackbarDetails));
  }

  showMessage(snackbarDetails: ISnackbarDetails): void {
    let showTimeoutLength = 0;

    if (this.visible) {
      clearTimeout(this.hideTimeout);
      this.snackbarDetails.message = '';
      this.visible = false;
      showTimeoutLength = 250;
    }

    setTimeout(() => {
      this.snackbarDetails = snackbarDetails;

      if (this.snackbarDetails.message) {
        this.visible = true;

        this.hideTimeout = setTimeout(() => {
          this.visible = false;
        }, this.snackbarDetails.duration);
      }
    }, showTimeoutLength);
  }
}
