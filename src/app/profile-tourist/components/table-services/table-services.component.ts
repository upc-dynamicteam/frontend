import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-table-services',
  templateUrl: './table-services.component.html',
  styleUrls: ['./table-services.component.css']
})
export class TableServicesComponent implements OnInit {

    @Input()
    servicesUser: any = []
    serviceId: string = ""
    agencyId: string = ""
    @Input()
    customerId: string = ""

  constructor() { }

  ngOnInit(): void {
  }
  openReview(idService: string, idAgency: string){
        this.serviceId = idService
        this.agencyId = idAgency
        let review = document.getElementById("review")!
        let child = review.firstElementChild!
        let x = (child as HTMLElement).style.display = "block"
  }

}
