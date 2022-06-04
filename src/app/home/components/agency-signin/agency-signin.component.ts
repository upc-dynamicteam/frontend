import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-acency-signin',
  templateUrl: './agency-signin.component.html',
  styleUrls: ['./agency-signin.component.css'],
})
export class AgencySigninComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  email = new FormControl('', [Validators.required, Validators.email]);

  password = new FormControl('', [
    Validators.required,
    Validators.minLength(8),
  ]);

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
