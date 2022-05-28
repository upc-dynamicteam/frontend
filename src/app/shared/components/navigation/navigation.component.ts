import {Component, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {
    @Output() openSearch = new EventEmitter<string>();

    value: boolean = false;
    text: string = '';

    change(): void{
        this.value = !this.value
    }

    login(): void {
        let element = document.getElementById("")
    }

    search(event: any) {
        const charCode = (event.which)?event.which: event.keyCode;
        if(charCode == 13) {
            this.openSearch.emit(this.text);
        }
    }

}
