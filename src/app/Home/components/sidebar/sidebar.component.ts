import { Component, OnInit } from '@angular/core';

export interface Section {
    name: string;
}

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
    categories: Section[] = [
        {
            name: 'Ofertas del día'
        },
        {
            name: 'Populares'
        },
        {
            name: 'Para tí'
        },
    ];

    flights: Section[] = [
        {
            name: 'Ofertas de vuelos'
        }
    ];


}
