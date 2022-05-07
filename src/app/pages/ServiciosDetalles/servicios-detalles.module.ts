import {NgModule} from "@angular/core";
import {CommonModule, DatePipe} from "@angular/common";
import {MatIconModule} from "@angular/material/icon";
import {CoverPageComponent} from "./coverPage/coverPage.component";
import {InformationComponent} from "./information/information.component";
import {ReviewsComponent} from "./reviews/reviews.component";
import {ServiceDetailsComponent} from "./serviceDetails/serviceDetails.component";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatCardModule} from "@angular/material/card";
import {MatGridListModule} from "@angular/material/grid-list";
import {FlexLayoutModule} from "@angular/flex-layout";
import {ServiciosRoutingModule} from "./serviciosRouting.module";

@NgModule({
    declarations: [
        CoverPageComponent,
        InformationComponent,
        ReviewsComponent,
        ServiceDetailsComponent
    ],
    exports: [
        ServiceDetailsComponent
    ],
    imports: [
        CommonModule,
        MatIconModule,
        MatToolbarModule,
        MatCardModule,
        MatGridListModule,
        FlexLayoutModule,
        ServiciosRoutingModule
    ],
    providers: [DatePipe]
})

export class ServiciosDetallesModule{}
