import { Routes } from '@angular/router';
import { TripListing } from './components/trip-listing/trip-listing';
import { TripForm } from './components/trip-form/trip-form';
import { LoginComponent } from './login/login.component';
import { authGuard } from './services/auth.guard';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },

  { path: 'login', component: LoginComponent },

  { path: 'trips', component: TripListing, canActivate: [authGuard] },
  { path: 'add', component: TripForm, canActivate: [authGuard] },

  { path: '**', redirectTo: 'login' }
];
