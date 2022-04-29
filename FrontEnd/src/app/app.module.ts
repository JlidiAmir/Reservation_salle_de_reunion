import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ApiService } from './api.service';
import { environment } from 'src/environments/environment.prod';

import { AppComponent } from './app.component';
import { ReservationComponent } from './reservation/reservation.component';
import { ReservationsService } from './reservation/reservations.service';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { MenuComponent } from './menu/menu.component';
import { TemplateFormComponent } from './template-form/template-form.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { GererCompteComponent } from './gerer-compte/gerer-compte.component';
import { AjouterCompteComponent } from './gerer-compte/ajouter-compte/ajouter-compte.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { TraiterDemandeReservationComponent } from './traiter-demande-reservation/traiter-demande-reservation.component';
import { AccederHistoriqueComponent } from './acceder-historique/acceder-historique.component';
import { EnregistreDemandReservationComponent } from './enregistre-demand-reservation/enregistre-demand-reservation.component';
import { AccueilComponent } from './accueil/accueil.component';
import { FooterComponent } from './footer/footer.component';
import { GererSalleReunionComponent } from './gerer-salle-reunion/gerer-salle-reunion.component';
import { AjouterSalleComponent } from './gerer-salle-reunion/ajouter-salle/ajouter-salle.component';
import { ModifierSalleComponent } from './gerer-salle-reunion/modifier-salle/modifier-salle.component';
import { SupprimerSalleComponent } from './gerer-salle-reunion/supprimer-salle/supprimer-salle.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileSettingsComponent } from './profile-settings/profile-settings.component';

@NgModule({
  declarations: [
    AppComponent,
    ReservationComponent,
    ParentComponent,
    ChildComponent,
    MenuComponent,
    TemplateFormComponent,
    NavbarComponent,
    LoginComponent,
    SignUpComponent,
    GererCompteComponent,
    AjouterCompteComponent,
    SearchBarComponent,
    TraiterDemandeReservationComponent,
    AccederHistoriqueComponent,
    EnregistreDemandReservationComponent,
    AccueilComponent,
    FooterComponent,
    GererSalleReunionComponent,
    AjouterSalleComponent,
    ModifierSalleComponent,
    SupprimerSalleComponent,
    DashboardComponent,
    ProfileSettingsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [ReservationsService, ApiService],
  bootstrap: [AppComponent],
})
export class AppModule {}
