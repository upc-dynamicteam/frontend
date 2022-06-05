import { Component, NgModule } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { LoginComponent} from "../login/login.component";
import { AgencySigninComponent } from '../agency-signin/agency-signin.component';
import { UserSigninComponent } from '../user-signin/user-signin.component';

@Component({
  selector: 'app-menu',
  templateUrl: 'menu.component.html',
  styleUrls: ['menu.component.css'],
})
export class MenuComponent {
  constructor(public dialog: MatDialog) {}

  openLogin() {
    const dialogRef = this.dialog.open(LoginComponent, { restoreFocus: false });
  }
  openAgencySignIn() {
    const dialogRef = this.dialog.open(AgencySigninComponent, {
      restoreFocus: false,
    });
  }
  openUserSignIn() {
    const dialogRef = this.dialog.open(UserSigninComponent, {
      restoreFocus: false,
    });
  }
}
