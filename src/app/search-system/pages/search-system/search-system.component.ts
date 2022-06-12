import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Params } from "@angular/router";
import { ResultsComponent } from "../../components/results/results.component";

@Component({
  selector: 'app-search-system',
  templateUrl: './search-system.component.html',
  styleUrls: ['./search-system.component.css']
})
export class SearchSystemComponent implements OnInit {
    search: any;
    @ViewChild(ResultsComponent) result!: ResultsComponent;

    constructor(private _activatedRoute: ActivatedRoute) { }
    ngOnInit(): void {
        this._activatedRoute.paramMap.subscribe(params => {
            this.search = params.get('text');
        })
    }
    getFilter(e: any) {
        this.result.getMatchesWithFilters(e);
    }
}
