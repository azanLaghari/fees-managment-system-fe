//import { Component } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs';

import { StudentService } from '../../services/student.service';
import { FeesService } from '../../services/fees.service';

import { Student } from '../../models/student.model';
import { Fee } from '../../models/fees.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

                                  totalStudents: number = 0;
                                  totalPendingFees: number = 0;

                                  constructor(
                                    private studentService: StudentService,
                                    private feesService: FeesService
                                  ) {}

                                  ngOnInit(): void {
                                    this.loadDashboard();
                                  }

                                  loadDashboard(): void {
                                    forkJoin({
                                      students: this.studentService.getStudents(),
                                      fees: this.feesService.getFees()
                                    }).subscribe({
                                      next: ({ students, fees }: { students: Student[]; fees: Fee[] }) => {

                                        this.totalStudents = students.length;

                                        this.totalPendingFees = fees.reduce((sum, fee) => {
                                          return sum + (fee.feesPending || 0);
                                        }, 0);

                                      },
                                      error: (err) => console.error('Dashboard error', err)
                                    });
                                  }
                                }
