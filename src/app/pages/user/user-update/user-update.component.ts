import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {User} from "../../../models/ user.model";
import {AccountantService} from "../../../services/accountant.service";


@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.scss']
})
export class UserUpdateComponent implements OnInit {

  user!: User;
  id!: number;

  constructor(
    private route: ActivatedRoute,
    private accoutantService: AccountantService,
    private router: Router
  ) {}

  ngOnInit(): void {
    // 1️⃣ get ID from URL
    this.id = Number(this.route.snapshot.paramMap.get('id'));

    // 2️⃣ call getById
    this.accoutantService.getAccountantById(this.id).subscribe({
      next: (data) => this.user = data,
      error: err => console.error('Error loading user', err)
    });
  }

  submit(): void {
    // 3️⃣ update user
    this.accoutantService.updateAccountant(this.id, this.user).subscribe({
      next: () => this.router.navigate(['/user']),
      error: err => console.error('Error updating user', err)
    });
  }

  cancel(): void {
    this.router.navigate(['/user']);
  }
}
