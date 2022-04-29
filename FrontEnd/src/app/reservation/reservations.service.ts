import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ReservationsService {
  constructor() {}
  getReservations() {
    // Returning the Api rest get request from backend for the reservations.
    return [
      'Reservation #1',
      'Reservation #2',
      'Reservation #3',
      'Reservation #4',
      'Reservation #5',
      'Reservation #6',
    ];
  }
}
