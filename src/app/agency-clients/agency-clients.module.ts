import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgencyClientsComponent } from './pages/agency-clients/agency-clients.component';
import { TableClientsComponent } from './components/table-clients/table-clients.component';



@NgModule({
  declarations: [
    AgencyClientsComponent,
    TableClientsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AgencyClientsModule { }
