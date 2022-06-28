import {Component, Output, EventEmitter, OnDestroy, ChangeDetectorRef, OnInit} from '@angular/core';
import {MediaMatcher} from '@angular/cdk/layout';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit, OnDestroy{
    @Output() openSearch = new EventEmitter<string>();
    text: string = '';
    mobileQuery: MediaQueryList;
    photo: string = '';

    private readonly _mobileQueryListener: () => void;

    constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
        this.mobileQuery = media.matchMedia('(max-width: 600px)');
        this._mobileQueryListener = () => changeDetectorRef.detectChanges();
        this.mobileQuery.addEventListener('change', this._mobileQueryListener);
    }

    ngOnInit() {
        /*Cambiar a la foto del usuario registrado*/
        this.photo = 'https://www.designevo.com/res/templates/thumb_small/black-circle-and-white-mountain.webp';
    }

    ngOnDestroy(): void {
        this.mobileQuery.removeEventListener('change', this._mobileQueryListener);
    }

    search(event: any) {
        const charCode = (event.which)?event.which: event.keyCode;
        if(charCode == 13) {
            this.openSearch.emit(this.text);
        }
    }
}
