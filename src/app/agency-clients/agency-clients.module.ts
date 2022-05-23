import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgencyClientsComponent } from './pages/agency-clients/agency-clients.component';
import { AgencyClientsRoutingModule } from "./agency-clients-routing.module";
import { TableClientsComponent } from './components/table-clients/table-clients.component';
import { MatCardModule } from "@angular/material/card";
import {MatExpansionModule} from "@angular/material/expansion";
import {MatTableModule} from "@angular/material/table";
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import {MatButtonModule} from "@angular/material/button";
import {ExtendedModule} from "@angular/flex-layout";
import {MatTooltipModule} from "@angular/material/tooltip";
import {MatPaginatorModule} from "@angular/material/paginator";
import { StatusDialogComponent } from './components/status-dialog/status-dialog.component';
import {MatDialogModule} from "@angular/material/dialog";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";
import { AgencyInformationComponent } from './components/agency-information/agency-information.component';
import {MatGridListModule} from "@angular/material/grid-list";
import {MatInputModule} from "@angular/material/input";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AgencyClientsComponent,
    TableClientsComponent,
    StatusDialogComponent,
    AgencyInformationComponent
  ],
  exports: [
    AgencyClientsRoutingModule
  ],
    imports: [
        CommonModule,
        MatCardModule,
        MatExpansionModule,
        MatTableModule,
        MatButtonToggleModule,
        MatButtonModule,
        ExtendedModule,
        MatTooltipModule,
        MatPaginatorModule,
        MatDialogModule,
        MatFormFieldModule,
        MatSelectModule,
        MatGridListModule,
        MatInputModule,
        ReactiveFormsModule
    ]
})
export class AgencyClientsModule { }
