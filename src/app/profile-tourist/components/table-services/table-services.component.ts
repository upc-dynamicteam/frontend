import {Component, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router";

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
    hiredServiceId: string = ""
  constructor( private router: Router) { }

  ngOnInit(): void {
  }
  openReview(idService: string, idAgency: string, service: string, hiredService: string){
        this.serviceId = idService
        this.agencyId = idAgency
        this.service = service
        this.hiredServiceId = hiredService
        let review = document.getElementById("review")!
        let child = review.firstElementChild!
        let x = (child as HTMLElement).style.display = "block"
  }
    goToService(id: string) {
        this.router.navigate([`service/${id}`]);
    }

}
