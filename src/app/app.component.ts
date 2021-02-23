import { Component } from '@angular/core';


import { SnackbarService } from './services/snackbar.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],

})
export class AppComponent {
  persons = [
    {
      firstName: 'Pesho',
    },
    {
      firstName: 'Ivan',
    },
  ];
  constructor(private snackbarService: SnackbarService) { }

  loginMsg(username: string): void {
    this.snackbarService.loginSnackBar(username);
  }
  logoutMsg(username: string): void {
    this.snackbarService.logoutSnackBar(username);
  }
}
