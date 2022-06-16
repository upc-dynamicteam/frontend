import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import {AddServiceComponent} from "./pages/add-service/add-service.component";

const routes: Routes = [
    {
        path: '',
        children: [
            { path: '', component: AddServiceComponent }
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

export class AddServiceRoutingModule {

}
