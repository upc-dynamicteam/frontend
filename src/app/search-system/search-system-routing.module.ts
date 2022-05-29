import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchSystemComponent } from "./pages/search-system/search-system.component";

const routes: Routes = [
    {
        path: '',
        children: [
            { path: '', component: SearchSystemComponent}
        ],
        runGuardsAndResolvers: 'paramsOrQueryParamsChange'
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SearchSystemRoutingModule { }
