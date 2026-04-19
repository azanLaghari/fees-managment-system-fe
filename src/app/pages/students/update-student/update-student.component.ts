import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from '../../../models/student.model';
import { StudentService } from '../../../services/student.service';

@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styleUrls: ['./update-student.component.scss']
})
export class UpdateStudentComponent implements OnInit {

  student!: Student;
  studentId!: number;

  constructor(
    private route: ActivatedRoute,
    private studentService: StudentService,
    private router: Router
  ) {}

  ngOnInit(): void {
    // 1️⃣ get ID from URL
    this.studentId = Number(this.route.snapshot.paramMap.get('id'));

    // 2️⃣ call getById
    this.studentService.getStudentById(this.studentId).subscribe({
      next: (data) => this.student = data,
      error: err => console.error('Error loading student', err)
    });
  }

  submit(): void {
    // 3️⃣ update student
    this.studentService.updateStudent(this.studentId, this.student).subscribe({
      next: () => this.router.navigate(['/students']),
      error: err => console.error('Error updating student', err)
    });
  }

  cancel(): void {
    this.router.navigate(['/students']);
  }
}
