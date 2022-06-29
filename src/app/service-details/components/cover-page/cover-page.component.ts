import {Component, Input, OnInit} from '@angular/core';
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
    @Input()
    infoService: any = {}
  constructor(private serviceServiceInfo: ServiceServiceAgencyService, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() :void {
  }
}

