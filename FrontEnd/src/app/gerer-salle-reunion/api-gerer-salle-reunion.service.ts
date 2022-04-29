import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ApiGererSalleReunionService {
  baseUrl: string = 'http://localhost/angular_admin/php';
  constructor(private httpClient: HttpClient) {}
  public ajoutersalle(nomSalle, surface, capacite, prixPH) {
    return this.httpClient
      .post<any>(this.baseUrl + '/ajouterSalle.php', {
        nomSalle,
        surface,
        capacite,
        prixPH,
      })
      .pipe(
        map((Users) => {
          return Users;
        })
      );
  }
}
