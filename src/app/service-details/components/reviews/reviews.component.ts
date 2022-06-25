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
          this.serviceServiceInfo.getInfoServiceById(id).subscribe((data) => {
              this.infoService = data
              console.log(this.infoService)
              this.serviceServiceInfo.getReviewServiceByIdService(this.infoService.id).subscribe((data) => {
                  this.reviews = data
                  for(let i = 0; i < this.reviews.length; i++){
                      this.serviceServiceInfo.getInfoCustomerById(this.reviews[i].customerId).subscribe((data) => {
                          this.reviews[i].infoCustomer =  data
                      })
                  }
                  console.log(this.reviews)
              })
          })
      })
  }
    calc(n: string, t: number): Array<number> {
        let x = Number(n);
        if (t === 0) return Array(x);
        else return Array(5 - x);
    }
}
