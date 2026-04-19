import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  showError = false;

  constructor(public authService: AuthService, private router: Router) {
    console.log(authService.getUser());
  }

  logout() {
    this.showError = true;
  }

  closeModal() {
    this.showError = false;
  }

 confirmModal() {
    this.authService.logout();
    this.router.navigate(['/login']);
    this.showError = false;
  }
}
