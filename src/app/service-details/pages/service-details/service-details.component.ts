import { Component, OnInit } from '@angular/core';
import { DatePipe } from "@angular/common";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-serviceDetails',
  templateUrl: './service-details.component.html',
  styleUrls: ['./service-details.component.css']
})
export class ServiceDetailsComponent implements OnInit {
  title = 'Service Details';
  images: Gallery[] = [];
  information: Info[] = [];

  serviceId: any;

  constructor(private datePipe: DatePipe, private _activatedRoute: ActivatedRoute) {}

  ngOnInit() :void {
    this._activatedRoute.paramMap.subscribe(params => {
        this.serviceId = params.get('id');
    })
    console.log(this.serviceId);
    this.images = [
      {cols: 2, rows: 2},
      {cols: 1, rows: 1},
      {cols: 1, rows: 1},
      {cols: 1, rows: 1},
      {cols: 1, rows: 1},
    ];
    this.information = [
      {title: "Lorem1", subtitle: "Activity1", description: "Description1"},
      {title: "Lorem2", subtitle: "Activity2", description: "Description2"}
    ];
  }
}

export interface Gallery {
  cols: number;
  rows: number;
}

export interface Info {
  title: string;
  subtitle: string;
  description: string;
}


