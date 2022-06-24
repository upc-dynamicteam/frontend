import { Component, OnInit } from '@angular/core';
import { AgencyClientsService } from "../../services/agency-clients.service";
import { MatDialog } from "@angular/material/dialog";
import {StatusDialogComponent} from "../status-dialog/status-dialog.component";

@Component({
  selector: 'app-table-clients',
  templateUrl: './table-clients.component.html',
  styleUrls: ['./table-clients.component.css']
})
export class TableClientsComponent implements OnInit {

    constructor(private agencyClientsService: AgencyClientsService, public dialog: MatDialog) {
    }

    hiredServicesData: any = [];
    hiredServicesP: any = [];

    displayedColumns: string[] = ['username', 'email', 'phone', 'people', 'date', 'cost', 'status'];

    isEditMode = false;
    editData: any;

    ngOnInit(): void {
      this.getHiredService("a1");
    }

    getHiredService(agencyId: string) {
        this.agencyClientsService.getExtendInformation(agencyId, "customer").subscribe((response: any) => {
          this.hiredServicesData = response;
          //console.log(this.hiredServicesData);
          this.agencyClientsService.getExtendInformation(agencyId, "service").subscribe((response: any) => {
              this.hiredServicesP = response;
              //console.log(this.hiredServicesP);
              for(let i = 0; i < this.hiredServicesData.length; i++) {
                  let fullName = `${this.hiredServicesData[i].customer.name} ${this.hiredServicesData[i].customer.lastName}`;
                  this.hiredServicesData[i].customerName = fullName;
                  this.hiredServicesData[i].service = this.hiredServicesP[i].service;
              }
          })
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
