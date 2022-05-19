import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent   {

    close: any = 0;

    clickClose(): void{
        this.close = document.getElementById("close")!;
        this.close.parentElement.parentElement.parentElement.style.display = "none";
    }


}
