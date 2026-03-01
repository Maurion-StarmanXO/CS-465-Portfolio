import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthResponse } from '../models/auth-response';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private readonly tokenKey = 'travlr-token';
  private readonly apiBase = 'http://localhost:3000/api';

  constructor(private http: HttpClient) {}

  public saveToken(token: string): void {
    localStorage.setItem(this.tokenKey, token);
  }

  public getToken(): string {
    return localStorage.getItem(this.tokenKey) || '';
  }

  public logout(): void {
    localStorage.removeItem(this.tokenKey);
  }

  public isLoggedIn(): boolean {
    return this.getToken() !== '';
  }

  public login(credentials: { email: string; password: string }): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${this.apiBase}/login`, credentials);
  }

  public register(user: { name: string; email: string; password: string }): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${this.apiBase}/register`, user);
  }
}
