import { Component, OnInit } from '@angular/core';
import { AgencyClientsService } from "../../services/agency-clients.service";
import { MatDialog } from "@angular/material/dialog";
import {StatusDialogComponent} from "../status-dialog/status-dialog.component";
import {ActivatedRoute} from "@angular/router";
import {AgenciesService} from "../../services/agencies.service";

@Component({
  selector: 'app-table-clients',
  templateUrl: './table-clients.component.html',
  styleUrls: ['./table-clients.component.css']
})
export class TableClientsComponent implements OnInit {

    constructor(private agencyClientsService: AgencyClientsService, private agencyService: AgenciesService, public dialog: MatDialog, private activatedRoute: ActivatedRoute) {
    }

    hiredServicesData: any = [];
    hiredServicesP: any = [];

    displayedColumns: string[] = ['username', 'email', 'phone', 'people', 'date', 'cost', 'status'];

    isEditMode = false;
    editData: any;
    infoService: any = {}

    ngOnInit(): void {
        this.activatedRoute.params.subscribe(({id, idService}) => {
            this.agencyService.getServiceById(idService).subscribe((data) => {
                this.infoService = data
            })
            this.getHiredService(id, idService);
        })
    }

    getHiredService(agencyId: string, idService: string) {
        this.agencyService.getHiredServicesByServiceId(idService).subscribe((response: any) => {
          this.hiredServicesData = response.content;
          console.log("lala",this.hiredServicesData)
        })
    }

    editStatus(element: any){
        this.isEditMode = true;
        const dialogRef = this.dialog.open(StatusDialogComponent, {
            data: {e: element}
        });

        dialogRef.afterClosed().subscribe(result => {
            if (result != null) {
                this.toHiredService(result.e);
                this.updateHiredService(this.editData);
            }
        });
    }

    toHiredService(element: any) {
        this.editData = {
            "id": element.id,
            "amount": element.amount,
            "price": element.price,
            "scheduledDate": element.scheduledDate,
            "status": element.status,
            "customerId": element.customerId,
            "serviceId": element.serviceId
        }
    }

    updateHiredService(hiredService: any) {
        this.agencyClientsService.update(hiredService.id, hiredService).subscribe((response: any) => {
            console.log(response);
        })
    }

}
