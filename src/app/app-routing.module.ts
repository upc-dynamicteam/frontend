import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    {
        path: 'home',
        loadChildren: () => import('./Home/home.module').then(m => m.HomeModule )
    },
    {
        path: 'servicio',
        loadChildren: () => import('./ServiciosDetalles/servicios-detalles.module').then(m => m.ServiciosDetallesModule )
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
        path: "agency-profile",
        loadChildren: () => import("./agency-profile/agency-profile.module").then(m => m.AgencyProfileModule)
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
