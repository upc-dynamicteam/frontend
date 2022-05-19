import {Component, OnInit} from '@angular/core';
import {DatePipe} from "@angular/common";

@Component({
  selector: 'app-coverPage',
  templateUrl: './coverPage.component.html',
  styleUrls: ['./coverPage.component.css']
})
export class CoverPageComponent implements OnInit {
  title = 'coverPage';
  images: Gallery[] = [];

  ngOnInit() :void {
    this.images = [
      {cols: 2, rows: 2},
      {cols: 1, rows: 1},
      {cols: 1, rows: 1},
      {cols: 1, rows: 1},
      {cols: 1, rows: 1},
    ];
  }
}

export interface Gallery {
  cols: number;
  rows: number;
}

