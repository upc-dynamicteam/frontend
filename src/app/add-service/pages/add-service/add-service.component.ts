import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {AddServiceService} from "../../services/add-service.service";

@Component({
  selector: 'app-add-service',
  templateUrl: './add-service.component.html',
  styleUrls: ['./add-service.component.css']
})
export class AddServiceComponent implements OnInit {

   agencyData: any = {}

  constructor(private activatedRoute: ActivatedRoute, private addService:AddServiceService ) { }

  ngOnInit(): void {
      this.activatedRoute.params.subscribe(({id}) => {
        this.addService.getInfoAgencyById(id).subscribe((data) => {
            this.agencyData = data
        })
      })
  }

}

