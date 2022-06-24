import { Component, OnInit } from '@angular/core';
import {ServiceProfileTouristService} from "../../services/service-profile-tourist.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-page-profile-tourist',
  templateUrl: './page-profile-tourist.component.html',
  styleUrls: ['./page-profile-tourist.component.css']
})
export class PageProfileTouristComponent implements OnInit {

  constructor(private serviceProfileTourist: ServiceProfileTouristService, private activatedRoute: ActivatedRoute ) { }

    services: any = []
    userInfo: any =  {}

  ngOnInit(): void {

      this.activatedRoute.params.subscribe(({id}) => {
          this.serviceProfileTourist.getServicesByUser(id).subscribe((data) => {
              this.services = data
              for(let i = 0; i < this.services.length; i++){
                  this.serviceProfileTourist.getServiceInfoById(this.services[i].serviceId).subscribe((data) =>{
                      this.services[i].infoService = data
                      this.serviceProfileTourist.getAgencyInfoById(this.services[i].infoService.agencyId).subscribe((data) =>{
                          this.services[i].infoAgency = data
                      })
                  })
              }
              console.log(this.services)
          })
          this.serviceProfileTourist.getInfoUserById(id).subscribe((data) => {
              this.userInfo = data
              console.log(this.userInfo)
          })
      })

  }

}
