import {Component} from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  email = '';
  password = '';
  error = '';
  showError = false;

  constructor(private authService: AuthService, private router: Router) {
  }

  login() {
    this.authService.login(this.email, this.password).subscribe({
      next: (res) => {
        this.authService.saveAuthData(res.token, res.user);
        this.router.navigate(['/dashboard']);
        this.showError = false;
      },
      error: (err) => {

        this.showError = true;
      }
    });
  }

confirmModal() {
  this.showError = false;
}


  closeModal() {
    this.showError = false;
  }
}
