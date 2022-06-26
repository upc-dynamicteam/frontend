import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {AddServiceService} from "../../../add-service/services/add-service.service";

@Component({
  selector: 'app-updateservicepage',
  templateUrl: './updateservicepage.component.html',
  styleUrls: ['./updateservicepage.component.css']
})
export class UpdateservicepageComponent implements OnInit {


    agencyData: any = {}

    constructor(private activatedRoute: ActivatedRoute, private addService:AddServiceService ) { }

    ngOnInit(): void {
        this.activatedRoute.params.subscribe(({id, idService}) => {
            this.addService.getInfoAgencyById(id).subscribe((data) => {
                this.agencyData = data
            })
        })
    }

}
