import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-enregistre-demand-reservation',
  templateUrl: './enregistre-demand-reservation.component.html',
  styleUrls: ['./enregistre-demand-reservation.component.css'],
})
export class EnregistreDemandReservationComponent implements OnInit {
  dateDebRes = new Date();
  dateFinRes = new Date();
  duree: number;
  constructor() {}
  changeDuree() {
    alert(this.dateFinRes.getDate() - this.dateDebRes.getDate());
  }

  ngOnInit(): void {}
}
