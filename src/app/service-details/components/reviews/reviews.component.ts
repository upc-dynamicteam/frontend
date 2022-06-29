import {Component, OnInit} from '@angular/core';
import {DatePipe} from "@angular/common";
import {ServiceServiceAgencyService} from "../../services/service-service-agency.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {
   title = 'reviews';
   infoService: any = {}
   reviews: any = []

  constructor(private serviceServiceInfo: ServiceServiceAgencyService, private activatedRoute: ActivatedRoute) {}

  ngOnInit() :void {
      this.activatedRoute.params.subscribe(({id}) => {
         this.serviceServiceInfo.getReviewServiceByIdService(id).subscribe((data) => {
             this.reviews = data.content
             console.log(data.content)
         })
      })
  }
    calc(n: string, t: number): Array<number> {
        let x = Number(n);
        if (t === 0) return Array(x);
        else return Array(5 - x);
    }
}
