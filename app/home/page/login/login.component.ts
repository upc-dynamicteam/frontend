import { Component, OnInit, NgModule } from '@angular/core';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {EmailPageComponent} from "../recover-password/email-page/email-page.component";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openRecoverPass() {
    this.dialog.closeAll();
    const dialogRef = this.dialog.open(EmailPageComponent, {restoreFocus: false});
  }

  email = new FormControl('', [Validators.required, Validators.email]);

  password = new FormControl('', [Validators.required, Validators.minLength(8)]);

  getErrorMessageEmail() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  hide = true;

  getErrorMessagePassword() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('minLength') ? 'Not a valid password' : '';
  }
}
