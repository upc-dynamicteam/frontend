import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    {
        path: 'home',
        loadChildren: () => import('./home/home.module').then(m => m.HomeModule )
    },
    {
        path: 'service/:id',
        loadChildren: () => import('./service-details/service-details.module').then(m => m.ServiceDetailsModule ),
        runGuardsAndResolvers: 'paramsOrQueryParamsChange'
    },
    {
        path: 'clients',
        loadChildren: () => import('./agency-clients/agency-clients.module').then(m => m.AgencyClientsModule )
    },
    {
        path: "profile-tourist/:id",
        loadChildren: () => import("./profile-tourist/profile-tourist.module").then(m => m.ProfileTouristModule)
    },
    {
        path: 'search/:text',
        loadChildren: () => import('./search-system/search-system.module').then(m => m.SearchSystemModule ),
        runGuardsAndResolvers: 'paramsOrQueryParamsChange'
    },
    {
        path: "profile-agency/:id",
        loadChildren: () => import("./agency-profile/agency-profile.module").then(m => m.AgencyProfileModule)
    },
    {
        path: "profile-agency/:id/add-service",
        loadChildren: () => import("./add-service/add-service.module").then(m => m.AddServiceModule)
    },
    {
        path: "profile-agency/:id/update-service/:idService",
        loadChildren: () => import("./update-service/update-service.module").then(m => m.UpdateServiceModule)
    },
    { path: '**', redirectTo: 'home', pathMatch: 'full' }
];


@NgModule({
    imports: [
        RouterModule.forRoot( routes )
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }
