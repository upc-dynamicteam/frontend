import {NgModule} from "@angular/core";
import {CommonModule, DatePipe} from "@angular/common";
import {MatIconModule} from "@angular/material/icon";
import {CoverPageComponent} from "./components/cover-page/cover-page.component";
import {InformationComponent} from "./components/information/information.component";
import {ReviewsComponent} from "./components/reviews/reviews.component";
import {ServiceDetailsComponent} from "./pages/service-details/service-details.component";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatCardModule} from "@angular/material/card";
import {MatGridListModule} from "@angular/material/grid-list";
import {FlexLayoutModule} from "@angular/flex-layout";
import {ServiceRoutingModule} from "./service-routing.module";

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
        ServiceRoutingModule
    ],
    providers: [DatePipe]
})

export class ServiceDetailsModule {}
