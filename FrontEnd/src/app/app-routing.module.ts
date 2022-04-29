import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccederHistoriqueComponent } from './acceder-historique/acceder-historique.component';
import { AccueilComponent } from './accueil/accueil.component';
import { AppComponent } from './app.component';
import { DashboardGuard } from './dashboard.guard';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EnregistreDemandReservationComponent } from './enregistre-demand-reservation/enregistre-demand-reservation.component';
import { GererCompteComponent } from './gerer-compte/gerer-compte.component';
import { AjouterSalleComponent } from './gerer-salle-reunion/ajouter-salle/ajouter-salle.component';
import { GererSalleReunionComponent } from './gerer-salle-reunion/gerer-salle-reunion.component';
import { ModifierSalleComponent } from './gerer-salle-reunion/modifier-salle/modifier-salle.component';
import { SupprimerSalleComponent } from './gerer-salle-reunion/supprimer-salle/supprimer-salle.component';

import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProfileSettingsComponent } from './profile-settings/profile-settings.component';

import { SignUpComponent } from './sign-up/sign-up.component';
import { TraiterDemandeReservationComponent } from './traiter-demande-reservation/traiter-demande-reservation.component';
import { UserGuard } from './user.guard';

const routes: Routes = [
  { path: '', component: AccueilComponent },
  { path: 'sign-up-component', component: SignUpComponent },
  { path: 'login-component', component: LoginComponent },
  {
    path: 'enregistre-demande-reservation-component',
    component: EnregistreDemandReservationComponent,
    canActivate: [UserGuard],
  },
  {
    path: 'acceder-historique-component',
    component: AccederHistoriqueComponent,
    canActivate: [UserGuard],
  },
  {
    path: 'dashboard-component',
    component: DashboardComponent,
    canActivate: [DashboardGuard],
    children: [
      {
        path: 'traiter-demande-reservation-component',
        component: TraiterDemandeReservationComponent,
      },
      {
        path: 'gerer-salle-reunion-component',
        component: GererSalleReunionComponent,
      },
      {
        path: 'ajouter-salle-component',
        component: AjouterSalleComponent,
      },
      {
        path: 'modifier-salle-component',
        component: ModifierSalleComponent,
      },
      {
        path: 'supprimer-salle-component',
        component: SupprimerSalleComponent,
      },
      {
        path: 'gerer-compte-component',
        component: GererCompteComponent,
      },
      {
        path: 'profile-settings-component',
        component: ProfileSettingsComponent,
      },
    ],
  },

  // { path: '**', component: AppComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
