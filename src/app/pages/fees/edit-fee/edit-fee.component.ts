//import { Component } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FeesService } from '../../../services/fees.service';
import { Fee } from '../../../models/fees.model';

@Component({
  selector: 'app-edit-fee',
  templateUrl: './edit-fee.component.html',
  styleUrls: ['./edit-fee.component.scss']
})
export class EditFeeComponent implements OnInit {

                                fee!: Fee;
                                feeId!: number;

                                originalFeesPending!: number;

                                constructor(
                                  private route: ActivatedRoute,
                                  private feesService: FeesService,
                                  private router: Router
                                ) {}

                                ngOnInit(): void {
                                  // 1️⃣ Get ID from URL
                                  this.feeId = Number(this.route.snapshot.paramMap.get('id'));

                                  // 2️⃣ Load fee by ID
                                  this.feesService.getFeesById(this.feeId).subscribe({
                                    next: (data) => this.fee = data,
                                    error: (err) => console.error('Error loading fee', err)
                                  });
                                }

                                updateFees(): void {

                                  // ✅ check before sending to backend
                                  if (this.fee.feesPending > this.originalFeesPending) {
                                    alert('Invalid amount! Cannot increase pending fees.');
                                    return;
                                  }

                                  if (this.fee.feesPending < 0) {
                                    alert('Amount cannot be negative');
                                    return;
                                  }

                                  this.feesService.updateFees(this.feeId, this.fee).subscribe({
                                    next: () => {
                                      alert('Fees updated successfully!');
                                      this.router.navigate(['/fees']);
                                    },
                                    error: (err) => {
                                      // ✅ backend error show
                                      alert(err.error || 'Error updating fee');
                                    }
                                  });
                                }

                                // 4️⃣ Cancel
                                cancel(): void {
                                  this.router.navigate(['/fees']);
                                }
                              }
