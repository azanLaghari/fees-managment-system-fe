import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { User } from '../models/ user.model';

@Injectable({
  providedIn: 'root'
})
export class AccountantService {

  // Base URL for admin user management
  private apiUrl = 'http://localhost:8080/admin/user';

  constructor(
    private http: HttpClient,
    private authService: AuthService
  ) {}

  /** Helper: attach JWT token to headers */
  private getAuthHeaders(): HttpHeaders {
    const token = this.authService.getToken();
    return new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
  }

  /** GET: all users (admin only) */
  getAllAccountants(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl, { headers: this.getAuthHeaders() });
  }

  /** GET: single user by ID */
  getAccountantById(id: number): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}/${id}`, { headers: this.getAuthHeaders() });
  }


  /** PUT: update user info by ID */
  updateAccountant(id: number, user: User): Observable<User> {
    return this.http.put<User>(`${this.apiUrl}/${id}`, user, { headers: this.getAuthHeaders() });
  }

  /** DELETE: remove user by ID */
  deleteAccountant(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`, { headers: this.getAuthHeaders() });
  }

  /** Optional: register via AuthService (for public registration) */
  register(user: { firstName: string, lastName: string, email: string, password: string }): Observable<any> {
    return this.authService.register(user);
  }
}
