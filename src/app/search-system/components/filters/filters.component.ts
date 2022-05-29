import { Component, OnInit, ViewChild } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {

    @ViewChild('priceForm', {static: false})
    priceForm!: FormGroup;

    constructor(private readonly fb: FormBuilder) { }

    ngOnInit(): void {
        this.formInitialization();
    }

    formInitialization() {
      this.priceForm = this.fb.group({
          lowestPrice: [''],
          highestPrice: ['']
      })
    }

    onSubmit(){
        console.log("x");
    }

    calc(n: number, t: number): Array<number> {
        if (t === 0) return Array(n);
        else return Array(5 - n);
    }
}
