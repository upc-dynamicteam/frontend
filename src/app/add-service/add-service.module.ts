import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AddServiceComponent} from "./pages/add-service/add-service.component";
import {FormServiceComponent} from "./components/form-service/form-service.component";
import {AgencyClientsModule} from "../agency-clients/agency-clients.module";
import {AddServiceRoutingModule} from "./add-service.routing.module";
import {MatCardModule} from "@angular/material/card";
import {FormsModule} from "@angular/forms";

@NgModule({
    declarations: [
        FormServiceComponent,
        AddServiceComponent,
    ],
    exports: [
        AddServiceComponent,
    ],
    imports: [
        CommonModule,
        MatCardModule,
        FormsModule,
        AddServiceRoutingModule,
        AgencyClientsModule,
    ]
})
export class AddServiceModule { }
