import {Component, OnInit} from '@angular/core';
import {DatePipe} from "@angular/common";
import {ServiceServiceAgencyService} from "../../services/service-service-agency.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.css']
})
export class InformationComponent implements OnInit {
  title = 'Service Details';
  infoService: any = {}
  constructor(private serviceServiceInfo: ServiceServiceAgencyService, private activatedRoute: ActivatedRoute) {

  }


  ngOnInit() :void {
      this.activatedRoute.params.subscribe(({id}) => {
          this.serviceServiceInfo.getInfoServiceById(id).subscribe((data) => {
              this.infoService = data
              console.log(this.infoService)
          })
      })
  }
}
export interface Info {
  title: string;
  subtitle: string;
  description: string;
}


