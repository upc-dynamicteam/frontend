import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AgencyClientsComponent } from "./pages/agency-clients/agency-clients.component";

const routes: Routes = [
    {
        path: '',
        children: [
            { path: '', component: AgencyClientsComponent }
        ]
    }
]

@NgModule({
    imports: [
        RouterModule.forChild( routes )
    ]
})
export class AgencyClientsRoutingModule { }
