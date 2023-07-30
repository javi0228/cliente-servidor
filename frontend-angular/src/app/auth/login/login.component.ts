import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loading = false;
  errors = false;
  public email: string = '';
  public password: string = '';

  constructor(private authService: AuthService, private router: Router) {

  }

  login(form: any): void {
    this.loading = true;
    this.errors = false;
    // request to service
    this.authService.login(this.email, this.password)
      .subscribe(
        {
          next: (res: any) => {
            let token = res.data.token;
            let user = res.data.user;

            this.errors = false;
            this.loading = false;
            // Set token to session storage to persist the session
            sessionStorage.setItem('token', token);
            sessionStorage.setItem('user', user);

            // Navigate to home page
            this.router.navigate(['/']);
          },
          error: (e) => {
            this.loading = false

            this.errors = e.error.data ? e.error.data.error : 'Server error, try again later';

          },
          complete: () => {
            form.reset();
          }
        }
      );

  }
}
