import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from "@angular/forms";
import {ServiceHomeService} from "../../services/service-home.service";

@Component({
  selector: 'app-user-login',
  templateUrl: './user-signin.component.html',
  styleUrls: ['./user-signin.component.css']
})
export class UserSigninComponent implements OnInit {

  constructor(private serviceHome: ServiceHomeService) { }

    userCreate: any = {
        "name": "",
        "lastName": "",
        "email": "",
        "password": "",
        "phoneNumber": "",
        "country": "",
        "photo": ""
    }

  ngOnInit(): void {
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
  createAccount(){
      let randomNumber = Math.ceil(Math.random() * (200 - 100 + 1) + 100)
      let photo = `https://picsum.photos/200/${randomNumber}`
      this.userCreate.photo = photo
      this.serviceHome.createAccountCustomer(this.userCreate).subscribe(() => {

      })
  }
}
