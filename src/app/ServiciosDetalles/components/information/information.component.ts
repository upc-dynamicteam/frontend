import {Component, OnInit} from '@angular/core';
import {DatePipe} from "@angular/common";

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.css']
})
export class InformationComponent implements OnInit {
  title = 'Service Details';
  information: Info[] = [];

  ngOnInit() :void {
    this.information = [
      {title: "Lorem1", subtitle: "Activity1", description: "Description1"},
      {title: "Lorem2", subtitle: "Activity2", description: "Description2"}
    ];
  }
}
export interface Info {
  title: string;
  subtitle: string;
  description: string;
}


