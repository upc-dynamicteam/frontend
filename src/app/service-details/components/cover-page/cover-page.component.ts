import {Component, OnInit} from '@angular/core';
import {DatePipe} from "@angular/common";
import {ActivatedRoute} from "@angular/router";
import {ServiceProfileTouristService} from "../../../profile-tourist/services/service-profile-tourist.service";
import {ServiceServiceAgencyService} from "../../services/service-service-agency.service";

@Component({
  selector: 'app-coverPage',
  templateUrl: './cover-page.component.html',
  styleUrls: ['./cover-page.component.css']
})
export class CoverPageComponent implements OnInit {
  title = 'cover-page';
  images: Gallery[] = [];

  constructor(private serviceServiceInfo: ServiceServiceAgencyService, private activatedRoute: ActivatedRoute) {
  }

   infoService: any = {}
   agencyInfo: any = {}


  ngOnInit() :void {
    this.images = [
      {cols: 2, rows: 2},
      {cols: 1, rows: 1},
      {cols: 1, rows: 1},
      {cols: 1, rows: 1},
      {cols: 1, rows: 1},
    ];
    this.activatedRoute.params.subscribe(({id}) => {
        this.serviceServiceInfo.getInfoServiceById(id).subscribe((data) => {
            this.infoService = data
            this.serviceServiceInfo.getInfoAgencyById(this.infoService.agencyId).subscribe((data) => {
                this.agencyInfo = data
            })

        })
    })
  }
}

export interface Gallery {
  cols: number;
  rows: number;
}

