import {Component, Input, OnInit} from '@angular/core';
import {Service} from "../../interfaces/service";
import {AgenciesService} from "../../../agency-clients/services/agencies.service";
import {Agency} from "../../../agency-clients/interfaces/agency";

@Component({
  selector: 'app-coverPage',
  templateUrl: './cover-page.component.html',
  styleUrls: ['./cover-page.component.css']
})
export class CoverPageComponent implements OnInit {
    @Input() data!: Service;
    agency!: Agency;

    constructor(private agenciesService: AgenciesService) { }
    ngOnInit(): void {
        this.getAgency();
    }

    getAgency() {
        this.agenciesService.getById(this.data.agencyId).subscribe((response: any) => {
            this.agency = response;
        })
    }
}
