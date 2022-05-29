import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/page/home/home.component';
import { ToolbarComponent } from './public/toolbar/toolbar.component';
import { MatIconModule } from "@angular/material/icon";
import { MatToolbarModule } from "@angular/material/toolbar";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from "@angular/material/button";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatListModule} from "@angular/material/list";
import { MenuComponent } from './home/components/menu/menu.component';
import {MatMenuModule} from "@angular/material/menu";
import {MatDialogModule} from "@angular/material/dialog";
import { AcencySigninComponent } from './home/page/acency-signin/acency-signin.component';
import { UserSigninComponent } from './home/page/user-signin/user-signin.component';
import { LoginComponent } from './home/page/login/login.component';
import {MatSelectModule} from "@angular/material/select";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {ReactiveFormsModule} from "@angular/forms";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import {FormsModule} from '@angular/forms';
import {MatNativeDateModule} from '@angular/material/core';
import {HttpClientModule} from '@angular/common/http';
import { OffersComponent } from './home/components/offers/offers.component';
import { SidebarComponent } from './home/components/sidebar/sidebar.component';
import { PopularComponent } from './home/components/popular/popular.component';
import { ForYouComponent } from './home/components/for-you/for-you.component';
import {MatCardModule} from "@angular/material/card";
import { EmailPageComponent } from './home/page/recover-password/email-page/email-page.component';
import { CodePageComponent } from './home/page/recover-password/code-page/code-page.component';
import { PasswordPageComponent } from './home/page/recover-password/password-page/password-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ToolbarComponent,
    MenuComponent,
    AcencySigninComponent,
    UserSigninComponent,
    LoginComponent,
    OffersComponent,
    SidebarComponent,
    PopularComponent,
    ForYouComponent,
    EmailPageComponent,
    CodePageComponent,
    PasswordPageComponent,
  ],
    imports: [
        BrowserModule,
        MatToolbarModule,
        AppRoutingModule,
        MatIconModule,
        MatToolbarModule,
        BrowserAnimationsModule,
        MatButtonModule,
        MatSidenavModule,
        MatListModule,
        MatMenuModule,
        MatDialogModule,
        MatSelectModule,
        MatFormFieldModule,
        MatInputModule,
        ReactiveFormsModule,
        MatCheckboxModule,
        MatAutocompleteModule,
        FormsModule,
        MatNativeDateModule,
        HttpClientModule,
        MatCardModule
    ],
  providers: [],
  bootstrap: [
    AppComponent,
  ]
})
export class AppModule { }
