import { Component, OnInit } from '@angular/core';
import {AgenciesService} from "../../services/agencies.service";
import {Agency} from "../../interfaces/agency";

@Component({
  selector: 'app-agency-information',
  templateUrl: './agency-information.component.html',
  styleUrls: ['./agency-information.component.css']
})
export class AgencyInformationComponent implements OnInit {

  constructor(private agenciesService: AgenciesService) { }

  agencyData!: Agency;
  isEditMode = false;
  editData!: Agency;

  ngOnInit(): void {
      this.getAgencyData("a1");
  }

  getAgencyData(id: string) {
      this.agenciesService.getById(id).subscribe((response: any) => {
          this.agencyData = response;
      })
  }

}
