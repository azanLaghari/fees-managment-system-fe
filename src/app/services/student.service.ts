import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Student } from '../models/student.model';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  // Make sure this matches your backend URL
  private apiUrl = 'http://localhost:8080/accountant/students';

  constructor(
    private http: HttpClient,
    private authService: AuthService // use AuthService to get JWT
  ) { }

  // Helper method to attach JWT token in headers
  private getAuthHeaders(): HttpHeaders {
    const token = this.authService.getToken(); // safer than directly accessing localStorage
    return new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
  }

  // GET all students
  getStudents(): Observable<Student[]> {
    return this.http.get<Student[]>(this.apiUrl, { headers: this.getAuthHeaders() });
  }

  // GET a student by ID
  getStudentById(id: number): Observable<Student> {
    return this.http.get<Student>(`${this.apiUrl}/${id}`, { headers: this.getAuthHeaders() });
  }

  // POST new student
  addStudent(student: Student): Observable<Student> {
    return this.http.post<Student>(this.apiUrl, student, { headers: this.getAuthHeaders() });
  }

  // PUT update student
  updateStudent(studentId: number, student: Student): Observable<Student> {
    return this.http.put<Student>(`${this.apiUrl}/${student.id}`, student, { headers: this.getAuthHeaders() });
  }

  // DELETE student
  deleteStudent(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`, { headers: this.getAuthHeaders() });
  }
}
