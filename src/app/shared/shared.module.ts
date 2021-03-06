import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { HomeModule } from "../home/home.module";
import { FormsModule } from "@angular/forms";
import { MatToolbarModule } from "@angular/material/toolbar";
import { NavigationComponent } from "./components/navigation/navigation.component";
import { MatIconModule } from "@angular/material/icon";

@NgModule({
    declarations: [
        NavigationComponent
    ],
    exports:[
        NavigationComponent
    ],
    imports: [
        MatToolbarModule,
        RouterModule,
        CommonModule,
        HomeModule,
        FormsModule,
        MatIconModule
    ]
})

export class SharedModule{

}
