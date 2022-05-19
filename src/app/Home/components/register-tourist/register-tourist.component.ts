import { Component } from '@angular/core';

@Component({
  selector: 'app-register-tourist',
  templateUrl: './register-tourist.component.html',
  styleUrls: ['./register-tourist.component.css']
})
export class RegisterTouristComponent   {
    close: any = 0;

    clickClose(): void{
        this.close = document.getElementById("closeRegisterTourist")!;
        this.close.parentElement.parentElement.parentElement.style.display = "none";
    }


}
