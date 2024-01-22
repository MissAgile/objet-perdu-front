import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './components/pages/accueil/accueil.component';
import { PubliciteComponent } from './components/pages/publicite/publicite.component';
import { AnnoncesComponent } from './components/pages/annonces/annonces.component';
import {ContactComponent } from './components/pages/contact/contact.component';

const routes: Routes = [
  //route pages utlilisateur
  {path: "accueil", component:AccueilComponent},
  // { path: '', redirectTo: 'accueil', pathMatch: 'full' },
  {path: "publicite", component:PubliciteComponent},
  {path: "annonces", component:AnnoncesComponent},
  {path: "contact", component:ContactComponent}




  //route admin
  {path: "accueil-admin", component:PubliciteComponent},
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
