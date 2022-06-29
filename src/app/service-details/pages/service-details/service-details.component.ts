import { Component, OnInit } from '@angular/core';
import { DatePipe } from "@angular/common";
import { ActivatedRoute } from "@angular/router";
import {ServiceServiceAgencyService} from "../../services/service-service-agency.service";

@Component({
  selector: 'app-serviceDetails',
  templateUrl: './service-details.component.html',
  styleUrls: ['./service-details.component.css']
})
export class ServiceDetailsComponent implements OnInit {

  constructor(private serviceServiceInfo: ServiceServiceAgencyService, private activatedRoute: ActivatedRoute) {}

    infoService: any = {}

  ngOnInit() :void {
      this.activatedRoute.params.subscribe(({id}) => {
          this.serviceServiceInfo.getInfoServiceById(id).subscribe((data) => {
              this.infoService = data
          })
      })
  }
}

