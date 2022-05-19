import {Component, OnInit} from '@angular/core';
import {DatePipe} from "@angular/common";

@Component({
  selector: 'app-serviceDetails',
  templateUrl: './serviceDetails.component.html',
  styleUrls: ['./serviceDetails.component.css']
})
export class ServiceDetailsComponent implements OnInit {
  title = 'Service Details';
  images: Gallery[] = [];
  information: Info[] = [];

  constructor(private datePipe: DatePipe) {}

  ngOnInit() :void {
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


