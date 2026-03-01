import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TripDataService, Trip } from '../../services/trip-data';

@Component({
  selector: 'app-trip-listing',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './trip-listing.html',
  styleUrl: './trip-listing.css'
})
export class TripListing implements OnInit {

  trips: Trip[] = [];
  errorMessage = '';

  constructor(private tripService: TripDataService) {}

  ngOnInit(): void {
    this.tripService.getTrips().subscribe({
      next: (data) => {
        this.trips = data;
      },
      error: (err) => {
        this.errorMessage = err.message || 'Error loading trips';
      }
    });
  }

  imageUrl(filename: string): string {
  // Option A (common): server hosts images from /images
  return `http://localhost:3000/images/${filename}`;

  // Option B (if you copy images into Angular assets):
  // return `assets/images/${filename}`;
}

}