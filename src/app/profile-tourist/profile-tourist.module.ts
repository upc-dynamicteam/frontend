import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './components/profile/profile.component';
import { TableServicesComponent } from './components/table-services/table-services.component';
import { ServiceHiredComponent } from './components/service-hired/service-hired.component';
import {profileTouristRoutingModule} from "./profile-tourist-routing.module";
import {PageProfileTouristComponent} from "./pages/page-profile-tourist/page-profile-tourist.component";
import { UpdateProfileComponent } from './components/update-profile/update-profile.component';
import { ServiceReviewComponent } from './components/service-review/service-review.component';
import {FormsModule} from "@angular/forms";



@NgModule({
    declarations: [
      ProfileComponent,
      TableServicesComponent,
      ServiceHiredComponent,
      PageProfileTouristComponent,
      UpdateProfileComponent,
      ServiceReviewComponent
    ],
    exports: [
        PageProfileTouristComponent
    ],
  imports: [
      CommonModule,
      FormsModule,
      profileTouristRoutingModule
  ]
})
export class ProfileTouristModule { }
