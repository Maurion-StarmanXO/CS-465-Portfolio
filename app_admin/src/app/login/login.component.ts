import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
})
export class LoginComponent {
  email = '';
  password = '';
  errorMessage = '';

  constructor(
    private authService: AuthenticationService,
    private router: Router
  ) {}

  onSubmit(): void {
  console.log('SUBMIT CLICKED');
  this.errorMessage = '';

    this.authService.login({ email: this.email, password: this.password }).subscribe({
      next: (resp) => {
        this.authService.saveToken(resp.token);
        this.router.navigate(['/']);
      },
      error: (err) => {
        this.errorMessage = err?.error?.message || 'Login failed';
      },
    });
  }
}
