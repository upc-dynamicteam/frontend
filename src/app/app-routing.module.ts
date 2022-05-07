import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
    {
        path: 'servicios',
        loadChildren: () => import('./pages/ServiciosDetalles/servicios-detalles.module').then(m => m.ServiciosDetallesModule )
    },
    {
        path: 'home',
        loadChildren: () => import('./pages/Home/home.module').then(m => m.HomeModule )
    }
];


@NgModule({
    imports: [
        RouterModule.forRoot( routes  )
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }
