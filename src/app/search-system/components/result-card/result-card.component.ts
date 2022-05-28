import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-result-card',
  templateUrl: './result-card.component.html',
  styleUrls: ['./result-card.component.css']
})
export class ResultCardComponent implements OnInit {
    isOffer = true;
    rate = 5;
  constructor() { }
  ngOnInit(): void {
  }
  calc(n: number, t: number): Array<number> {
      if (t === 0) return Array(n);
      else return Array(5 - n);
  }
}
