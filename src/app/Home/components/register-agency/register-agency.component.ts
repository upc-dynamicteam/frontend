import { Component } from '@angular/core';

@Component({
  selector: 'app-register-agency',
  templateUrl: './register-agency.component.html',
  styleUrls: ['./register-agency.component.css']
})
export class RegisterAgencyComponent   {
    close: any = 0;

    clickClose(): void{
        this.close = document.getElementById("closeRegisterAgency")!;
        this.close.parentElement.parentElement.parentElement.style.display = "none";
    }




}
