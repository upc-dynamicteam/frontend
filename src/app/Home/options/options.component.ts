import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.css']
})
export class OptionsComponent   {
    @Input()
    show: boolean = true;
    elementLogin : any | null = 0;

    login(): void{
        this.elementLogin = document.getElementById("login")!
        this.elementLogin.firstChild.style.display = "block";
    }

    registerTourist(): void{
        this.elementLogin = document.getElementById("registerTourist")!
        this.elementLogin.firstChild.style.display = "block";
    }

    registerAgency(): void{
        this.elementLogin = document.getElementById("registerAgency")!
        this.elementLogin.firstChild.style.display = "block";
    }

}
