import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FeesService } from '../../../services/fees.service';
import { Fee } from '../../../models/fees.model';


@Component({
  selector: 'app-list-fees',
  templateUrl: './list-fees.component.html',
  styleUrls: ['./list-fees.component.scss']
})
export class ListFeesComponent implements OnInit {


fees: Fee[] = [];

                                   constructor(
                                     private feesService: FeesService,
                                     private router: Router
                                   ) {}

                                   ngOnInit(): void {
                                     this.loadFees();
                                   }

                                   loadFees(): void {
                                     this.feesService.getFees().subscribe({
                                       next: (data: Fee[]) => {
                                         this.fees = data;
                                       },
                                       error: (err) => {
                                         console.error('Error loading fees', err);
                                       }
                                     });
                                   }

                                   addFees(): void {
                                     this.router.navigate(['/fees/add']);
                                   }

                                   editFees(id?: number): void {
                                     if (id) {
                                       this.router.navigate(['/fees/edit', id]);
                                     }
                                   }

                                   deleteFees(id?: number): void {
                                     if (!id) return;

                                     if (confirm('Are you sure you want to delete this fee record?')) {
                                       this.feesService.deleteFees(id).subscribe({
                                         next: () => this.loadFees(),
                                         error: (err) => console.error('Delete failed', err)
                                       });
                                     }
                                   }


}
