import {Component, Input, OnInit} from '@angular/core';
import {ServiceProfileTouristService} from "../../services/service-profile-tourist.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-service-review',
  templateUrl: './service-review.component.html',
  styleUrls: ['./service-review.component.css']
})
export class ServiceReviewComponent implements OnInit {

  constructor(private serviceProfileTourist: ServiceProfileTouristService, private router: Router) { }

    @Input()
    serviceId: string = ""
    @Input()
    agencyId: string = ""
    @Input()
    customerId: string = ""
    @Input()
    service: any = {}
    @Input()
    hiredServiceId: string = ""
    @Input()
    amount: string = ""
    @Input()
    price: string = ""

    reviewService : any = {
        "serviceId": 0,
        "score": 0,
        "comment": "",
        "customerId": 0,
        "date": ""
    }
    reviewAgency: any = {
        "date": "",
        "comment": "",
        "professionalismScore": 0,
        "securityScore":0,
        "qualityScore": 0,
        "costScore": 0,
        "customerId": 0,
        "agencyId": 0
    }

  ngOnInit(): void {
  }

  close(){
      let modalOne = document.getElementById("modal-1")!
      modalOne.style.display = "none";
  }
  close2(){
      let modalTwo = document.getElementById("modal-2")!
      modalTwo.style.display = "none";
  }
  openModalTwo(){
      let modalOne = document.getElementById("modal-1")!
      modalOne.style.display = "none";

      let modalTwo = document.getElementById("modal-2")!
      modalTwo.style.display = "block";
  }
  finishFirst(){
      let today = new Date();
      let date = today.getDate() + '/'+ (today.getMonth()+1) + '/' + today.getFullYear();
      this.reviewService.serviceId = this.serviceId
      this.reviewService.customerId = this.customerId
      this.reviewService.date = date

      this.serviceProfileTourist.createServiceReview(this.reviewService, this.serviceId, this.customerId).subscribe(() => {
      })
      this.updateService()
      this.reviewService = {
          "serviceId": 0,
          "score": 0,
          "comment": "",
          "customerId": 0
      }
      let modalTwo = document.getElementById("modal-2")!
      modalTwo.style.display = "none";
  }
  updateService(){
      let today = new Date();
      let date = today.getDate() + '/'+ (today.getMonth()+1) + '/' + today.getFullYear();
      let update  = {
          "scheduledDate": date,
          "amount": this.amount,
          "price": this.price,
          "status": "Finalizado"
      }
      console.log(update, this.hiredServiceId)
      this.serviceProfileTourist.updateHiredService(this.serviceId, this.customerId, this.hiredServiceId, update).subscribe(() => {
          this.router.navigate([`service/${this.serviceId}`]);
        })
  }
  finishCompleteReview(){
      let today = new Date();
      let date = today.getDate() + '/'+ (today.getMonth()+1) + '/' + today.getFullYear();
      this.reviewAgency.date = date
      this.reviewAgency.agencyId = this.agencyId
      this.reviewAgency.customerId = this.customerId
      console.log(this.reviewAgency)
      this.serviceProfileTourist.createAgencyReview(this.reviewAgency, this.agencyId, this.customerId).subscribe(() => {
      })
      this.finishFirst()
      this.updateService()
  }
}
