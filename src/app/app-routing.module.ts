import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    {
        path: 'home',
        loadChildren: () => import('./Home/home.module').then(m => m.HomeModule )
    },
    {
        path: 'servicio',
        loadChildren: () => import('./ServiciosDetalles/servicios-detalles.module').then(m => m.ServiciosDetallesModule )
    }
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
