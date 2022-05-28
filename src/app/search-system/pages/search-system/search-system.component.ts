import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";

@Component({
  selector: 'app-search-system',
  templateUrl: './search-system.component.html',
  styleUrls: ['./search-system.component.css']
})
export class SearchSystemComponent implements OnInit {
    search: any;
    constructor(private _activatedRoute: ActivatedRoute) { }
    ngOnInit(): void {
        this._activatedRoute.paramMap.subscribe(params => {
            this.search = params.get('text');
        })
    }

}
