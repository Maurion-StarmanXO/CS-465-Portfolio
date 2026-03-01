import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { TripDataService, Trip } from '../../services/trip-data';

@Component({
  selector: 'app-trip-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './trip-form.html',
  styleUrl: './trip-form.css'
})
export class TripForm {
  trip: Partial<Trip> = {
    name: '',
    code: '',
    length: '',
    start: '',
    resort: '',
    perPerson: 0,
    image: '',
    description: ''
  };

  errorMessage = '';
  successMessage = '';

  constructor(private tripService: TripDataService, private router: Router) {}

  onSubmit() {
    this.errorMessage = '';
    this.successMessage = '';

    // minimal guard
    if (!this.trip.name || !this.trip.code) {
      this.errorMessage = 'Name and Code are required.';
      return;
    }

    this.tripService.addTrip(this.trip as Trip).subscribe({
      next: () => {
        // redirect to trips so you SEE it worked
        this.router.navigate(['/trips']);
      },
      error: (err) => {
        this.errorMessage = err?.message ?? 'Error adding trip.';
      }
    });
  }
}