import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import { User } from "../../../models/ user.model";
import {AccountantService} from "../../../services/accountant.service";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  user: User[] = [];

  constructor(
    private accountantService: AccountantService,
    private router: Router
  ) {}

  ngOnInit() {
    this.loadAccountants();
  }

  loadAccountants() {
    this.accountantService.getAllAccountants().subscribe({
      next: (data) => this.user = data,
      error: (err) => console.error(err)
    });
  }

  register() { this.router.navigate(['/user/register']); }

  editAccountant(id: number) { this.router.navigate(['/user/edit', id]); }

  deleteAccountant(id: number) {

    if (confirm('Are you sure?')) {
      this.accountantService.deleteAccountant(id).subscribe({
        next: () => this.loadAccountants(),
        error: err => console.error('Delete failed', err)
      });
    }
  }
}
