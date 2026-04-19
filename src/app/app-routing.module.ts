import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { StudentListComponent } from './pages/students/student-list/student-list.component';
import { PaymentsComponent } from './pages/payments/payments.component';
import { ReportsComponent } from './pages/reports/reports.component';
import { StudentAddComponent } from "./pages/students/student-add/student-add.component";
import {LoginComponent} from "./pages/login/login.component";
import {UpdateStudentComponent} from "./pages/students/update-student/update-student.component";
import {AboutComponent} from "./pages/about/about.component";
import {RegisterUserComponent} from "./pages/user/register-user/register-user.component";
import {UserListComponent} from "./pages/user/user-list/user-list.component";
import { AuthGuard } from './guards/auth.guard';
import {UserUpdateComponent} from "./pages/user/user-update/user-update.component";
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { ListFeesComponent } from './pages/fees/list-fees/list-fees.component';
import { AddFeeComponent } from './pages/fees/add-fee/add-fee.component';
import { EditFeeComponent } from './pages/fees/edit-fee/edit-fee.component';

const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: 'about', component: AboutComponent },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'payments', component: PaymentsComponent, canActivate: [AuthGuard] },
  { path: 'reports', component: ReportsComponent, canActivate: [AuthGuard] },
  { path: 'students', component: StudentListComponent, canActivate: [AuthGuard] },
  { path: 'students/add', component: StudentAddComponent, canActivate: [AuthGuard] },
  { path: 'students/edit/:id', component: UpdateStudentComponent, canActivate: [AuthGuard] },
  { path: 'user', component: UserListComponent },
  { path: 'user/register', component: RegisterUserComponent },
  { path: 'user/edit/:id', component: UserUpdateComponent, canActivate: [AuthGuard] },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'fees', component: ListFeesComponent, canActivate: [AuthGuard] },
  { path: 'fees/add', component: AddFeeComponent, canActivate: [AuthGuard] },
  { path: 'fees/edit/:id', component: EditFeeComponent, canActivate: [AuthGuard] }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
