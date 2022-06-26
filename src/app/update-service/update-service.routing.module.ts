import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import {UpdateservicepageComponent} from "./pages/updateservicepage/updateservicepage.component";

const routes: Routes = [
    {
        path: '',
        children: [
            { path: '', component: UpdateservicepageComponent }
        ]
    }
]

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports:[
        RouterModule
    ]
})

export class UpdateServiceRoutingModule {

}
