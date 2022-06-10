import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeModule } from "./home/home.module";
import { ServiceDetailsModule } from "./service-details/service-details.module";
import { AppRoutingModule } from "./app-routing.module";
import { AgencyClientsModule } from "./agency-clients/agency-clients.module";
import { HttpClientModule } from "@angular/common/http";
import { ReactiveFormsModule } from "@angular/forms";
import {SharedModule} from "./shared/shared.module";
import {MatIconModule} from "@angular/material/icon";
import {AgencyProfileModule} from "./agency-profile/agency-profile.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
      BrowserModule,
      HomeModule,
      BrowserAnimationsModule,
      ServiceDetailsModule,
      AgencyClientsModule,
      AgencyProfileModule,
      BrowserAnimationsModule,
      AppRoutingModule,
      HttpClientModule,
      ReactiveFormsModule,
      MatIconModule,
      SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
