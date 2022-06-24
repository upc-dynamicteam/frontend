import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchSystemRoutingModule } from './search-system-routing.module';
import { ResultsComponent } from './components/results/results.component';
import { SearchSystemComponent } from './pages/search-system/search-system.component';
import { MatCardModule } from "@angular/material/card";
import { ResultCardComponent } from './components/result-card/result-card.component';
import { MatIconModule } from "@angular/material/icon";
import { FiltersComponent } from './components/filters/filters.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";


@NgModule({
  declarations: [
    ResultsComponent,
    SearchSystemComponent,
    ResultCardComponent,
    FiltersComponent
  ],
    imports: [
        CommonModule,
        SearchSystemRoutingModule,
        MatCardModule,
        MatIconModule,
        ReactiveFormsModule,
        MatButtonModule,
        FormsModule
    ]
})
export class SearchSystemModule { }
