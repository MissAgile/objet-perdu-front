import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {DataTablesModule} from 'angular-datatables';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilAdminComponent } from './components/admin/accueil-admin/accueil-admin.component';
import { FooterComponent } from './components/menu/footer/footer.component';
import { AccueilComponent } from './components/pages/accueil/accueil.component';
import { AuthentificationComponent } from './components/auth/authentification/authentification.component';
import { SidebarComponent } from './components/admin/sidebar/sidebar.component';
import { HeaderComponent } from './components/menu/header/header.component';
import { PubliciteComponent } from './components/pages/publicite/publicite.component';
import { ContactComponent } from './components/pages/contact/contact.component';
import { AnnoncesComponent } from './components/pages/annonces/annonces.component';
import { ConfidentialiteComponent } from './components/pages/confidentialite/confidentialite.component';
import { UtilisationComponent } from './components/pages/utilisation/utilisation.component';

@NgModule({
  declarations: [
    AppComponent,
    AccueilAdminComponent,
    HeaderComponent,
    FooterComponent,
    AccueilComponent,
    AuthentificationComponent,
    SidebarComponent,
    PubliciteComponent,
    ContactComponent,
    AnnoncesComponent,
    ConfidentialiteComponent,
    UtilisationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DataTablesModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
