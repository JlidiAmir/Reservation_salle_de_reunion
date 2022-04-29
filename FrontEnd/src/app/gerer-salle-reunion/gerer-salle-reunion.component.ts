import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gerer-salle-reunion',
  templateUrl: './gerer-salle-reunion.component.html',
  styleUrls: ['./gerer-salle-reunion.component.css'],
})
export class GererSalleReunionComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}
  navigateToPage() {
    this.router.navigate['ajouter-salle-component'];
  }
}
