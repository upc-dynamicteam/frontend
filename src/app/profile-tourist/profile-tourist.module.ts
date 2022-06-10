import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './components/profile/profile.component';
import { TableServicesComponent } from './components/table-services/table-services.component';
import { ServiceHiredComponent } from './components/service-hired/service-hired.component';
import {profileTouristRoutingModule} from "./profile-tourist-routing.module";
import {PageProfileTouristComponent} from "./pages/page-profile-tourist/page-profile-tourist.component";



@NgModule({
    declarations: [
      ProfileComponent,
      TableServicesComponent,
      ServiceHiredComponent,
      PageProfileTouristComponent
    ],
    exports: [
        PageProfileTouristComponent
    ],
  imports: [
      CommonModule,
      profileTouristRoutingModule
  ]
})
export class ProfileTouristModule { }
