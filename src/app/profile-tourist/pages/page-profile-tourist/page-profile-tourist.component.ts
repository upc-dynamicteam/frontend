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

  ngOnInit(): void {
      this.activatedRoute.params.subscribe(({id}) => {
          this.serviceProfileTourist.getServicesByUser(id).subscribe((data) => {
              console.log(data)
              this.services = data
          })
      })

  }

}
