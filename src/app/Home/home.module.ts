import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {PopularComponent} from "./popular/popular.component";
import {ForYouComponent} from "./for-you/for-you.component";
import {NavigateComponent} from "./navigate/navigate.component";
import {OffersComponent} from "./offers/offers.component";
import {SidebarComponent} from "./sidebar/sidebar.component";
import {MainPageComponent} from "./main-page/main-page.component";
import { OptionsComponent } from './options/options.component';
import { LoginComponent } from './login/login.component';
import { RegisterTouristComponent } from './register-tourist/register-tourist.component';
import { RegisterAgencyComponent } from './register-agency/register-agency.component';

@NgModule({
  declarations: [
      PopularComponent,
      ForYouComponent,
      NavigateComponent,
      OffersComponent,
      SidebarComponent,
      MainPageComponent,
      OptionsComponent,
      LoginComponent,
      RegisterTouristComponent,
      RegisterAgencyComponent,
  ],
  exports: [
      MainPageComponent,
      NavigateComponent,
      SidebarComponent
  ],
  imports: [
      CommonModule
  ]
})

export class HomeModule{}
