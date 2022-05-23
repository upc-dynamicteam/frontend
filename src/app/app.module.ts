import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeModule } from "./Home/home.module";
import { ServiciosDetallesModule } from "./ServiciosDetalles/servicios-detalles.module";
import { AppRoutingModule } from "./app-routing.module";
import { AgencyClientsModule } from "./agency-clients/agency-clients.module";
import { HttpClientModule } from "@angular/common/http";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
      BrowserModule,
      HomeModule,
      BrowserAnimationsModule,
      ServiciosDetallesModule,
      AgencyClientsModule,
      BrowserAnimationsModule,
      AppRoutingModule,
      HttpClientModule,
      ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
