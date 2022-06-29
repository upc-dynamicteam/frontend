import {Component, Input, OnInit} from '@angular/core';
import {DatePipe} from "@angular/common";
import {ServiceServiceAgencyService} from "../../services/service-service-agency.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.css']
})
export class InformationComponent implements OnInit {

   @Input()
  infoService: any = {}
  constructor(private serviceServiceInfo: ServiceServiceAgencyService, private activatedRoute: ActivatedRoute) {

  }

  ngOnInit() :void {
  }
}


