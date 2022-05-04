import { Component } from '@angular/core';

@Component({
  selector: 'app-navigate',
  templateUrl: './navigate.component.html',
  styleUrls: ['./navigate.component.css']
})
export class NavigateComponent   {

    value: boolean = false


    change(): void{
        this.value = !this.value
    }

    login(): void {
        let element = document.getElementById("")
    }

}
