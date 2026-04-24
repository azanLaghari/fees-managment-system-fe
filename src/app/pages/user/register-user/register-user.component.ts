import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {User} from "../../../models/ user.model";
import {AccountantService} from "../../../services/accountant.service";
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.scss']
})
export class RegisterUserComponent {

  user: User = {
       firstName: '',
       lastName: '',
       email: '',
       password: '',
       confirmPassword: '',
       status: '',
       role: '',
       createdAt: ''
     };

    passwordMismatch: boolean = false;
      showSuccess = false;
      showError = false;

      constructor(
        private accountantService: AccountantService,
        private router: Router,
        private authService: AuthService
      ) { }

   submit(form: any): void {
     this.showSuccess = false;
     this.showError = false;
     this.passwordMismatch = false;

     if (form.invalid) {
       form.control.markAllAsTouched();
       return;
     }

     if (this.user.password !== this.user.confirmPassword) {
       this.passwordMismatch = true;
       return;
     }

     this.accountantService.register({
       firstName: this.user.firstName,
       lastName: this.user.lastName,
       email: this.user.email,
       password: this.user.password
     }).subscribe({
       next: (res) => {
         console.log('Register Response:', res);

         if (this.authService.isAdmin()) {
           // Admin creates accountant → redirect to list
           this.router.navigate(['/user']);
         } else {
           // Normal user → show success modal
           this.showSuccess = true;
         }

         form.resetForm();
       },
       error: (err) => {
         console.error('Register Error:', err);
         this.showError = true;
       }
     });
   }
      closeModal(): void {
        this.showSuccess = false;
        this.showError = false;
        this.passwordMismatch = false;
      }

      cancel(): void {
        if (this.authService.isAdmin()) {
          this.router.navigate(['/user']);
        } else {
          this.router.navigate(['/login']);
        }
      }
    }
