import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {

    serviceStars: number = -1;
    agencyStars: number = -1;
    lowestPrice!: number;
    highestPrice!: number;

    initializer: boolean = false;

    @Output() openFilter = new EventEmitter<any>();

    constructor() { }

    ngOnInit(): void {
    }

    calc(n: number, t: number): Array<number> {
        if (t === 0) return Array(n);
        else return Array(5 - n);
    }

    changeServiceStars(value: number){
        this.serviceStars = value;
    }

    changeAgencyStars(value: number){
        this.agencyStars = value;
    }

    onSubmit(){
        let filterData = {
            lowestPrice: this.lowestPrice,
            highestPrice: this.highestPrice,
            serviceStars: this.serviceStars,
            agencyStars: this.agencyStars
        }
        console.log(filterData);
        this.openFilter.emit(filterData);
    }

}
