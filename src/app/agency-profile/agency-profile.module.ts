import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ServicesListComponent} from "./components/services-list/services-list.component";
import {ReviewsComponent} from "./components/reviews/reviews.component";
import {AgencyProfileComponent} from "./pages/agency-profile/agency-profile.component";
import {MatCardModule} from "@angular/material/card";
import {AgencyProfileRoutingModule} from "./agency-profile.routing.module";
import {AgencyClientsModule} from "../agency-clients/agency-clients.module";


@NgModule({
    declarations: [
        ServicesListComponent,
        ReviewsComponent,
        //NavigateComponent,
        AgencyProfileComponent,
    ],
    exports: [
        AgencyProfileComponent,
        //NavigateComponent,
    ],
    imports: [
        CommonModule,
        MatCardModule,
        AgencyProfileRoutingModule,
        AgencyClientsModule
    ]
})
export class AgencyProfileModule { }
