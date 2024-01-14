import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilAdminComponent } from './components/admin/accueil-admin/accueil-admin.component';
import { HeaderComponent } from './components/menu/header/header.component';
import { FooterComponent } from './components/menu/footer/footer.component';
import { AccueilComponent } from './components/pages/accueil/accueil.component';
import { AuthentificationComponent } from './components/auth/authentification/authentification.component';

@NgModule({
  declarations: [
    AppComponent,
    AccueilAdminComponent,
    HeaderComponent,
    FooterComponent,
    AccueilComponent,
    AuthentificationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
