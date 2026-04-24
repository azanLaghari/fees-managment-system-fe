import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentService } from '../../../services/student.service';
import { Student } from '../../../models/student.model';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})
export class StudentListComponent implements OnInit {

  showError = false;
  id: any;
  students: Student[] = [];

  constructor(
    private studentService: StudentService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadStudents();
  }

  loadStudents(): void {
    this.studentService.getStudents().subscribe({
      next: data => this.students = data,
      error: err => console.error('Error loading students', err)
    });
  }

  addStudent(): void {
    this.router.navigate(['/students/add']);
  }

  editStudent(id: number): void {
    this.router.navigate(['/students/edit', id]);
  }

  deleteStudent(id: number): void {
    this.showError = true;
    this.id = id;
  }

  confirmModal(): void {
    this.studentService.deleteStudent(this.id).subscribe({
      next: () => {
        this.loadStudents();
        this.showError = false;
      },
      error: err => console.error('Delete failed', err)
    });
  }

 closeModal() {
    this.showError = false;
  }

}
