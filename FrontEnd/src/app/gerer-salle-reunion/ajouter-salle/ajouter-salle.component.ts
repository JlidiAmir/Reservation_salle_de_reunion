import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { first } from 'rxjs';
import { ApiService } from 'src/app/api.service';
import { ApiGererSalleReunionService } from '../api-gerer-salle-reunion.service';

@Component({
  selector: 'app-ajouter-salle',
  templateUrl: './ajouter-salle.component.html',
  styleUrls: ['./ajouter-salle.component.css'],
})
export class AjouterSalleComponent implements OnInit {
  angForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private dataService: ApiGererSalleReunionService,
    private router: Router
  ) {
    this.angForm = this.fb.group({
      nomSalle: ['', [Validators.required, Validators.minLength(1)]],
      surface: ['', Validators.required],
      capacite: ['', Validators.required],
      prixPH: ['', Validators.required],
    });
  }

  ngOnInit() {}

  postdata(angForm1) {
    this.dataService
      .ajoutersalle(
        angForm1.value.nomSalle,
        angForm1.value.surface,
        angForm1.value.capacite,
        angForm1.value.prixPH
      )
      .pipe(first())
      .subscribe(
        (data) => {
          alert('done succes');
          // this.router.navigate(['login']);
        },

        (error) => {
          alert('problem');
        }
      );
  }

  get email() {
    return this.angForm.get('email');
  }
  get password() {
    return this.angForm.get('password');
  }
  get name() {
    return this.angForm.get('name');
  }
}
