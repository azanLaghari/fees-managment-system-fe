import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { Fee } from '../models/fees.model';

@Injectable({
  providedIn: 'root'
})
export class FeesService {

  private apiUrl = 'http://localhost:8080/accountant/fees';

  constructor(
    private http: HttpClient,
    private authService: AuthService
  ) {}

  private getAuthHeaders(): HttpHeaders {
    const token = this.authService.getToken();

    return new HttpHeaders({
      Authorization: `Bearer ${token}`
    });
  }

  getFees(): Observable<Fee[]> {
    return this.http.get<Fee[]>(this.apiUrl, {
      headers: this.getAuthHeaders()
    });
  }

  getFeesById(id: number): Observable<Fee> {
    return this.http.get<Fee>(`${this.apiUrl}/${id}`, {
      headers: this.getAuthHeaders()
    });
  }

  addFees(fee: Fee): Observable<Fee> {
    return this.http.post<Fee>(this.apiUrl, fee, {
      headers: this.getAuthHeaders()
    });
  }

  updateFees(id: number, fee: Fee): Observable<Fee> {
    return this.http.put<Fee>(`${this.apiUrl}/${id}`, fee, {
      headers: this.getAuthHeaders()
    });
  }

  deleteFees(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`, {
      headers: this.getAuthHeaders()
    });
  }
}
