import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Student} from "../models/student.model";

export interface UserResponse {
  id: number;
  name: string;
  email: string;
  role: string;
}

export interface AuthResponse {
  token: string;
  user: UserResponse;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl = 'http://localhost:8080/auth'; // Your backend URL

  constructor(private http: HttpClient) { }

  // Login method
  login(email: string, password: string): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${this.baseUrl}/login`, { email, password });
  }

  // Register method
//   register(user: { firstName: string, lastName: string, email: string, password: string }): Observable<any> {
//     return this.http.post(`${this.baseUrl}/register`, user);
//   }

// AuthService
register(user: { firstName: string, lastName: string, email: string, password: string }): Observable<any> {
  return this.http.post(`${this.baseUrl}/register`, user, { responseType: 'text' });
}

  // Save token and user in localStorage
  saveAuthData(token: string, user: UserResponse) {
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(user));
  }

  // Get token
  getToken(): string | null {
    return localStorage.getItem('token');
  }

  // Get logged-in user
  getUser(): UserResponse | null {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
  }

  // Check if logged in
  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }

  // Check if admin
  isAdmin(): boolean {
    const user = this.getUser();
    return user?.role === 'ADMIN';
  }

  // Logout
  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  }
forgotPassword(email: string): Observable<any> {
    return this.http.post(`${this.baseUrl}/forgot-password?email=${email}`, null);
  }


  resetPassword(token: string, newPassword: string): Observable<any> {
    return this.http.post(`${this.baseUrl}/reset-password?token=${token}&newPassword=${newPassword}`, null);
  }

}
