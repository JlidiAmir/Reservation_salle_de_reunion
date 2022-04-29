import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { first } from 'rxjs';
import { ApiService } from '../api.service';
import { Profile } from '../profile';

@Component({
  selector: 'app-profile-settings',
  templateUrl: './profile-settings.component.html',
  styleUrls: ['./profile-settings.component.css'],
})
export class ProfileSettingsComponent implements OnInit {
  profile: Profile;
  param: any;
  constructor(private dataService: ApiService, private router: Router) {}

  ngOnInit() {
    this.profile = JSON.parse(localStorage.getItem('profile'));
  }

  putdata(profile) {
    this.dataService
      .updateProfile(profile.idProfile, profile.email, profile.mdp)
      .pipe(first())
      .subscribe(
        (data) => {
          return data;
        },
        (error) => {
          console.log(error);
        }
      );
  }
  deletedata(profile) {
    this.dataService
      .deleteProfile(profile.idProfile)
      .pipe(first())
      .subscribe(
        (data) => {
          this.router.navigate(['']);
          window.alert('Suppression de Compte avec Succes');
          console.log(data);
          this.dataService.deleteToken();
        },
        (error) => {
          console.log(error);
        }
      );
  }
  onSubmit(param: any) {
    if (param == 'delete') {
      this.deletedata(this.profile);
    } else if (param == 'update') {
      this.putdata(this.profile);
    }
  }
}
