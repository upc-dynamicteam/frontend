import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgencyClientsComponent } from './pages/agency-clients/agency-clients.component';
import { AgencyClientsRoutingModule } from "./agency-clients-routing.module";
import { TableClientsComponent } from './components/table-clients/table-clients.component';
import {MatCardModule} from "@angular/material/card";

@NgModule({
  declarations: [
    AgencyClientsComponent,
    TableClientsComponent,
  ],
  exports: [
    AgencyClientsRoutingModule,
  ],
    imports: [
        CommonModule,
        MatCardModule
    ]
})
export class AgencyClientsModule { }
