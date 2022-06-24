import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-table-services',
  templateUrl: './table-services.component.html',
  styleUrls: ['./table-services.component.css']
})
export class TableServicesComponent implements OnInit {

    @Input()
    servicesUser: any = []
    @Input()
    customerId: string = ""


    serviceId: string = ""
    agencyId: string = ""
    service: any  = {}
  constructor() { }

  ngOnInit(): void {
  }
  openReview(idService: string, idAgency: string, service: string){
        this.serviceId = idService
        this.agencyId = idAgency
        this.service = service
        let review = document.getElementById("review")!
        let child = review.firstElementChild!
        let x = (child as HTMLElement).style.display = "block"
  }

}
