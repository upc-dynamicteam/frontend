import {Component, Input, OnInit} from '@angular/core';
import {Service} from "../../interfaces/service";
import {AgenciesService} from "../../../agency-clients/services/agencies.service";
import {Agency} from "../../../agency-clients/interfaces/agency";

@Component({
  selector: 'app-result-card',
  templateUrl: './result-card.component.html',
  styleUrls: ['./result-card.component.css']
})
export class ResultCardComponent implements OnInit {
    @Input() data!: Service;
    agency!: Agency;

    constructor(private agenciesService: AgenciesService) { }
    ngOnInit(): void {
      this.getAgency();
    }

    calc(n: string, t: number): Array<number> {
      let x = Number(n);
      if (t === 0) return Array(x);
      else return Array(5 - x);
    }

    getAgency() {
      this.agenciesService.getById(this.data.agencyId).subscribe((response: any) => {
          this.agency = response;
      })
    }
}
