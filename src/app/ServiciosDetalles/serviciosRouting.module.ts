import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {ServiceDetailsComponent} from "./pages/serviceDetails/serviceDetails.component";


const routes: Routes = [
    {
        path: '',
        children: [
            { path: '', component: ServiceDetailsComponent }
        ]
    }
]


@NgModule({
    imports: [
        RouterModule.forChild( routes )
    ]
})
export class ServiciosRoutingModule { }
