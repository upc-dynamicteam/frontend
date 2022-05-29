import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {PopularComponent} from "./components/popular/popular.component";
import {ForYouComponent} from "./components/for-you/for-you.component";
import {OffersComponent} from "./components/offers/offers.component";
import {SidebarComponent} from "./components/sidebar/sidebar.component";
import {MainPageComponent} from "./components/main-page/main-page.component";
import {HomePageComponent} from "./pages/home-page/home-page.component";
import {HomeRoutingModule} from "./homeRouting.module";
import {MenuComponent} from "./components/menu/menu.component";

// Material
import {MatIconModule} from "@angular/material/icon";
import{MatCardModule} from "@angular/material/card";
import {MatNativeDateModule} from "@angular/material/core";
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatInputModule} from "@angular/material/input";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";
import {MatDialogModule} from "@angular/material/dialog";
import {MatMenuModule} from "@angular/material/menu";
import {MatListModule} from "@angular/material/list";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatButtonModule} from "@angular/material/button";
import {MatToolbarModule} from "@angular/material/toolbar";
import {AcencySigninComponent} from "./components/acency-signin/acency-signin.component";
import {UserSigninComponent} from "./components/user-signin/user-signin.component";
import {CodePageComponent} from "./components/recover-password/code-page/code-page.component";
import {EmailPageComponent} from "./components/recover-password/email-page/email-page.component";
import {PasswordPageComponent} from "./components/recover-password/password-page/password-page.component";
import {LoginComponent} from "./components/login/login.component";
import {FormsModule} from "@angular/forms";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
      AcencySigninComponent,
      UserSigninComponent,
      CodePageComponent,
      EmailPageComponent,
      PasswordPageComponent,
      PopularComponent,
      ForYouComponent,
      OffersComponent,
      SidebarComponent,
      MainPageComponent,
      LoginComponent,
      HomePageComponent,
      MenuComponent
  ],
    exports: [
        MainPageComponent,
        SidebarComponent,
        SidebarComponent,
        HomePageComponent,
        HomeRoutingModule,
        MenuComponent
    ],
    imports: [
        ReactiveFormsModule,
        FormsModule,
        MatToolbarModule,
        MatCardModule,
        MatNativeDateModule,
        MatAutocompleteModule,
        MatCheckboxModule,
        MatInputModule,
        MatFormFieldModule,
        MatSelectModule,
        MatDialogModule,
        MatMenuModule,
        MatListModule,
        MatSidenavModule,
        MatButtonModule,
        CommonModule,
        MatIconModule
    ]
})

export class HomeModule{}
