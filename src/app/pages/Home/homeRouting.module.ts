import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {HomePageComponent} from "./home-page/home-page.component";


const routes: Routes = [
    {
        path: '',
        children: [
            { path: '', component: HomePageComponent }
        ]
    }
]


@NgModule({
    imports: [
        RouterModule.forChild( routes )
    ]
})
export class HomeRoutingModule { }
