import {Component, Input, OnInit} from '@angular/core';
import {ServiceProfileTouristService} from "../../services/service-profile-tourist.service";

@Component({
  selector: 'app-service-review',
  templateUrl: './service-review.component.html',
  styleUrls: ['./service-review.component.css']
})
export class ServiceReviewComponent implements OnInit {

  constructor(private serviceProfileTourist: ServiceProfileTouristService) { }

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
      let date = new Date()
      let actualDate = date.getDay() + "/" + date.getMonth() + "/" + date.getFullYear()
      this.reviewService.serviceId = this.serviceId
      this.reviewService.customerId = this.customerId
      this.reviewService.date = actualDate

      this.serviceProfileTourist.createServiceReview(this.reviewService).subscribe(() => {
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
      let update  = {
          "id": this.hiredServiceId,
          "status": "Finalizado"
      }
      console.log(update)
      this.serviceProfileTourist.updateHiredService(update.id, update).subscribe(() => {
        })
  }
  finishCompleteReview(){
      let date = new Date()
      let actualDate = date.getDay() + "/" + date.getMonth() + "/" + date.getFullYear()
      this.reviewAgency.date = actualDate
      this.reviewAgency.agencyId = this.agencyId
      this.reviewAgency.customerId = this.customerId
      console.log(this.reviewAgency)
      this.serviceProfileTourist.createAgencyReview(this.reviewAgency).subscribe(() => {
      })
      this.finishFirst()
      this.updateService()

  }

}
