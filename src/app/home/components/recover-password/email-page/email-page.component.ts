import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from "@angular/forms";
import {LoginComponent} from "../../login/login.component";
import {MatDialog} from "@angular/material/dialog";
import {CodePageComponent} from "../code-page/code-page.component";

@Component({
  selector: 'app-email-page',
  templateUrl: './email-page.component.html',
  styleUrls: ['./email-page.component.css']
})
export class EmailPageComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessageEmail() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  emailButtonForm() {
    this.dialog.closeAll();
    const dialogRef = this.dialog.open(CodePageComponent, {restoreFocus: false});
  }
}
