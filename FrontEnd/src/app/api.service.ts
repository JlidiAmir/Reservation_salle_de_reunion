import { Injectable, Output, EventEmitter } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Profile } from './profile';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  // redirectUrl: string;
  baseUrl: string = 'http://localhost/angular_admin/php';
  @Output() getLoggedInName: EventEmitter<any> = new EventEmitter();
  constructor(private httpClient: HttpClient) {}
  public userlogin(email: any, mdp: any) {
    return this.httpClient
      .post<any>(this.baseUrl + '/login.php', { email, mdp })
      .pipe(
        map((Profile) => {
          this.setToken(Profile[0]);
          this.getLoggedInName.emit(true);
          return Profile;
        })
      );
  }

  public userregistration(email: any, mdp: any) {
    return this.httpClient
      .post<any>(this.baseUrl + '/register.php', { email, mdp })
      .pipe(
        map((Profile) => {
          return Profile;
        })
      );
  }
  public updateProfile(idProfile: any, email: any, mdp: any) {
    return this.httpClient
      .post<any>(this.baseUrl + '/modifierProfile.php', {
        idProfile,
        email,
        mdp,
      })
      .pipe((Profile) => {
        window.alert('Modification de Compte avec Succes');
        let profile = {
          idProfile: idProfile,
          email: email,
          mdp: mdp,
          role: 'admin',
        };
        this.setToken(profile);

        return Profile;
      });
  }
  public deleteProfile(idProfile: any) {
    return this.httpClient
      .post<any>(this.baseUrl + '/supprimerProfile.php', {
        idProfile,
      })
      .pipe((Profile) => {
        window.alert('Suppression de Compte avec Succes');
        this.deleteToken();
        return Profile;
      });
  }

  //token
  setToken(profile: any) {
    localStorage.setItem('token', profile.role);
    localStorage.setItem('profile', JSON.stringify(profile));
  }
  getToken() {
    return localStorage.getItem('token');
  }
  deleteToken() {
    localStorage.removeItem('token');
    localStorage.removeItem('profile');
  }
  isLoggedIn() {
    const usertoken = this.getToken();
    if (usertoken != null) {
      return true;
    }
    return false;
  }
  isAdmin() {
    const usertoken = this.getToken();
    if (usertoken == 'admin') {
      return true;
    }
    return false;
  }
}
