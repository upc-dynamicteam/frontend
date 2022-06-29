import { Component, OnInit } from '@angular/core';
import {ServiceAgencyProfileService} from "../../services/service-agency-profile.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-agency-profile-page',
  templateUrl: './agency-profile.component.html',
  styleUrls: ['./agency-profile.component.css']
})
export class AgencyProfileComponent implements OnInit {

   listServices: any = []
   listReviews: any = []
   agencyData: any = []

  constructor(private serviceProfileAgency: ServiceAgencyProfileService, private activatedRoute: ActivatedRoute ) { }

    ngOnInit(): void{
        this.activatedRoute.params.subscribe(({id}) => {
            this.serviceProfileAgency.getServicesByAgencyId(id).subscribe((data) => {
                this.listServices = data.content
            })
            this.serviceProfileAgency.getInfoAgencyById(id).subscribe((data) => {
                this.agencyData = data
            })
            this.serviceProfileAgency.getReviewsAgencyById(id).subscribe((data) => {
                this.listReviews = data.content
                console.log(this.listReviews)
            })
        })
    }

}
