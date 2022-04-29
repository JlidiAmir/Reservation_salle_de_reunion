import { Component, OnInit } from '@angular/core';
import { ReservationsService } from './reservations.service';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css'],
})
export class ReservationComponent implements OnInit {
  title: string;
  reservations: any;

  constructor(service: ReservationsService) {
    this.title = ' Les Reservations Faites par les utilisateurs';
    this.reservations = service.getReservations();
  }

  ngOnInit(): void {}
}
