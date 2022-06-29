import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {AgenciesService} from "../../services/agencies.service";

@Component({
  selector: 'app-agency-clients',
  templateUrl: './agency-clients.component.html',
  styleUrls: ['./agency-clients.component.css']
})
export class AgencyClientsComponent implements OnInit {

    agencyData: any = {}
    serviceInfo: any = {}

  constructor(private agency: AgenciesService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
      this.activatedRoute.params.subscribe(({id, idService}) => {
            this.agency.getById(id).subscribe((data) => {
                this.agencyData = data
                console.log("profile", data)
            })
          this.agency.getServiceById(idService).subscribe((data) => {
              this.serviceInfo = data
          })
      })
  }

}
