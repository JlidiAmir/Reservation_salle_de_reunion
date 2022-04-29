import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { ApiService } from '../api.service';
import { DashboardGuard } from '../dashboard.guard';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  constructor(private route: ActivatedRoute, private auth: ApiService) {}

  ngOnInit(): void {}
  logout() {
    this.auth.deleteToken();
  }
  showUserServices() {
    if (this.auth.isLoggedIn()) {
      return true;
    }
    return false;
  }
  showAdminServices() {
    if (this.auth.isLoggedIn() && this.auth.isAdmin()) {
      return true;
    }
    return false;
  }
}
