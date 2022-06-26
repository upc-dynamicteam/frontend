import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UpdateservicepageComponent} from "./pages/updateservicepage/updateservicepage.component";
import {UpdateServiceRoutingModule} from "./update-service.routing.module";
import {AgencyClientsModule} from "../agency-clients/agency-clients.module";
import {MatCardModule} from "@angular/material/card";
import {FormsModule} from "@angular/forms";
import {FormServiceUpdateComponent} from "./components/form-service-update/form-service-update.component";

@NgModule({
  declarations: [
      FormServiceUpdateComponent,
      UpdateservicepageComponent
  ],
    exports:[
        UpdateservicepageComponent
    ],
  imports: [
      CommonModule,
      MatCardModule,
      FormsModule,
      UpdateServiceRoutingModule,
      AgencyClientsModule
  ]
})
export class UpdateServiceModule { }
