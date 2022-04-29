import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  angForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private dataService: ApiService,
    private router: Router
  ) {
    this.angForm = this.fb.group({
      email: [
        '',
        [Validators.required, Validators.minLength(1), Validators.email],
      ],
      password: ['', Validators.required],
    });
  }

  ngOnInit(): void {}
  postdata(angForm1: any) {
    this.dataService
      .userlogin(angForm1.value.email, angForm1.value.password)
      .pipe(first())
      .subscribe(
        (data) => {
          alert('Authentifier avec succes');
          if (data[0].role == 'admin') {
            this.router.navigate([
              'dashboard-component/traiter-demande-reservation-component',
            ]);
          } else {
            this.router.navigate(['']);
          }
        },
        (error) => {
          alert('User name or password is incorrect');
        }
      );
  }
  get email() {
    return this.angForm.get('email');
  }
  get password() {
    return this.angForm.get('password');
  }
}