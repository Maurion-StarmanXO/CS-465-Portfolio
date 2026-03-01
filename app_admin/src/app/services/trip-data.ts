import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Trip {
  _id?: string;
  code: string;
  name: string;
  length: string;
  start: string;
  resort: string;
  perPerson: number;
  image: string;
  description: string;
}

@Injectable({
  providedIn: 'root'
})
export class TripDataService {
  private apiBaseUrl = '/api';

  constructor(private http: HttpClient) {}

  getTrips(): Observable<Trip[]> {
    return this.http.get<Trip[]>(`${this.apiBaseUrl}/trips`);
  }

  addTrip(trip: Trip): Observable<Trip> {
  return this.http.post<Trip>(`${this.apiBaseUrl}/trips`, trip);
}

}