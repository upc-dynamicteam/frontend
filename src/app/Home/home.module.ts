import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PopularComponent } from "./components/popular/popular.component";
import { ForYouComponent } from "./components/for-you/for-you.component";
import { OffersComponent } from "./components/offers/offers.component";
import { SidebarComponent } from "./components/sidebar/sidebar.component";
import { MainPageComponent } from "./components/main-page/main-page.component";
import { OptionsComponent } from './components/options/options.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterTouristComponent } from './components/register-tourist/register-tourist.component';
import { RegisterAgencyComponent } from './components/register-agency/register-agency.component';
import { MatIconModule } from "@angular/material/icon";
import { HomePageComponent } from "./pages/home-page/home-page.component";
import { HomeRoutingModule } from "./homeRouting.module";

@NgModule({
  declarations: [
      PopularComponent,
      ForYouComponent,
      OffersComponent,
      SidebarComponent,
      MainPageComponent,
      OptionsComponent,
      LoginComponent,
      RegisterTouristComponent,
      RegisterAgencyComponent,
      HomePageComponent
  ],
    exports: [
        MainPageComponent,
        SidebarComponent,

        SidebarComponent,
        HomePageComponent,
        HomeRoutingModule,
        OptionsComponent
    ],
    imports: [
        CommonModule,
        MatIconModule
    ]
})

export class HomeModule{}
