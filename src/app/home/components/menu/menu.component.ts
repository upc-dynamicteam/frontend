import { Component, NgModule } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { LoginComponent } from '../../page/login/login.component';
import { AcencySigninComponent } from '../../page/acency-signin/acency-signin.component';
import { UserSigninComponent } from '../../page/user-signin/user-signin.component';

@Component({
  selector: 'app-menu',
  templateUrl: 'menu.component.html',
})
export class MenuComponent {
  constructor(public dialog: MatDialog) {}

  openLogin() {
    const dialogRef = this.dialog.open(LoginComponent, { restoreFocus: false });
  }
  openAgencySignIn() {
    const dialogRef = this.dialog.open(AcencySigninComponent, {
      restoreFocus: false,
    });
  }
  openUserSignIn() {
    const dialogRef = this.dialog.open(UserSigninComponent, {
      restoreFocus: false,
    });
  }
}
