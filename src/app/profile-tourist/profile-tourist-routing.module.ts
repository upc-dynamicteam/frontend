import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import {PageProfileTouristComponent} from "./pages/page-profile-tourist/page-profile-tourist.component";

const routes: Routes = [
    {
        path: '',
        children: [
            { path: '', component: PageProfileTouristComponent }
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

export class profileTouristRoutingModule {

}
