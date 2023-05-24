import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
export interface Reservation {
  name: String;
  email: String;
  date: String;
  time: String;
  guests: number;
}
@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css'],
})
export class ReservationComponent implements OnInit {
  constructor(private route: ActivatedRoute, private router :Router) {}
  reservationList: Reservation[] = [];
  reservation: Reservation = {
    name: '',
    email: '',
    date: '',
    time: '',
    guests: 0,
  };
  showForm = false;
  ngOnInit(): void {
    this.getReservationsFromLocalStorage();
    this.route.queryParams.subscribe(params=>{
      const email=params['email']||'';
      this.findReservation();
    })
  }
  closeForm() {
    this.showForm = false;
    this.reservation = {
      name: '',
      email: '',
      date: '',
      time: '',
      guests: 0,
    };
  }

  searchEmail: string = '';
  foundReservations: Reservation[] = [];

  saveReservationsToLocalStorage() {
    localStorage.setItem('reservations', JSON.stringify(this.reservationList));
  }
  getReservationsFromLocalStorage() {
    const storedReservations = localStorage.getItem('reservations');
    if (storedReservations) {
      this.reservationList = JSON.parse(storedReservations);
    }
  }
  findReservation() {
    this.foundReservations = this.reservationList.filter(
      (reservation) => reservation.email === this.searchEmail
      
    );
    this.router.navigate(['/resto/reservation'], { queryParams: { email: this.searchEmail } });
    console.log(this.searchEmail)
    console.log(this.foundReservations)
  }
  onSubmit(): void {
    this.reservationList.push(this.reservation);
    console.log('Reservation submitted:', this.reservation);
    //this.router.navigate(['/reservation'], { queryParams: { email: this.reservation.email } });
    this.saveReservationsToLocalStorage();
    this.closeForm();
  }
}
