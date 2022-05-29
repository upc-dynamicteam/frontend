import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-table-services',
  templateUrl: './table-services.component.html',
  styleUrls: ['./table-services.component.css']
})
export class TableServicesComponent implements OnInit {

    @Input()
    servicesUser: any = []

  constructor() { }

  ngOnInit(): void {
  }

}
