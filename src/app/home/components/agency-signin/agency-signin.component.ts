import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import {ServiceHomeService} from "../../services/service-home.service";

@Component({
  selector: 'app-acency-signin',
  templateUrl: './agency-signin.component.html',
  styleUrls: ['./agency-signin.component.css'],
})
export class AgencySigninComponent implements OnInit {
  constructor(private serviceHome: ServiceHomeService) {}

    agencyCreate: any = {
        "name": "",
        "email": "",
        "password": "",
        "phoneNumber": "",
        "description": "",
        "location": "",
        "ruc": "",
        "photo": ""
    }

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
  createAccount(){
      let randomNumber = Math.ceil(Math.random() * (200 - 100 + 1) + 100)
      let photo = `https://picsum.photos/200/${randomNumber}`
      this.agencyCreate.photo = photo
      console.log(this.agencyCreate)
      this.serviceHome.createAccountAgency(this.agencyCreate).subscribe(() => {
      })
  }
}
