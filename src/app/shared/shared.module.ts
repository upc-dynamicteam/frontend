import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './components/navigation/navigation.component';
import {HomeModule} from "../Home/home.module";
import {FormsModule} from "@angular/forms";



@NgModule({
    declarations: [
        NavigationComponent
    ],
    exports: [
        NavigationComponent
    ],
    imports: [
        CommonModule,
        HomeModule,
        FormsModule
    ]
})
export class SharedModule { }
