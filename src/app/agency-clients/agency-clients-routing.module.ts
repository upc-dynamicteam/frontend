import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TableClientsComponent } from "./components/table-clients/table-clients.component";

const routes: Routes = [
    {
        path: '',
        children: [
            { path: '', component: TableClientsComponent }
        ]
    }
]


@NgModule({
    imports: [
        RouterModule.forChild( routes )
    ]
})
export class AgencyClientsRoutingModule { }
