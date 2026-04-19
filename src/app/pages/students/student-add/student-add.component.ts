import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { StudentService } from '../../../services/student.service';
import { Student } from '../../../models/student.model';

@Component({
  selector: 'app-student-add',
  templateUrl: './student-add.component.html',
  styleUrls: ['./student-add.component.scss']
})
export class StudentAddComponent {

  student: Student = {
    studentName: '',
    className: '',
    rollNo: 0,
    parentEmail: ''
  };

  constructor(
    private studentService: StudentService,
    private router: Router
  ) { }

  submit(form: any): void {

    if (form.invalid) {
      form.control.markAllAsTouched();
      return;
    }

    this.studentService.addStudent(this.student).subscribe({
      next: () => this.router.navigate(['/students']),
      error: err => console.error(err)
    });
  }

  cancel(): void {
    this.router.navigate(['/students']); // back to list
  }
}
