import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { StudentListComponent } from './pages/students/student-list/student-list.component';
import { PaymentsComponent } from './pages/payments/payments.component';
import { ReportsComponent } from './pages/reports/reports.component';
import { StudentAddComponent } from './pages/students/student-add/student-add.component';
import { LoginComponent } from './pages/login/login.component';
import { UpdateStudentComponent } from './pages/students/update-student/update-student.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { RegisterUserComponent } from './pages/user/register-user/register-user.component';
import { UserListComponent } from './pages/user/user-list/user-list.component';
import { UserUpdateComponent } from './pages/user/user-update/user-update.component';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { AddFeeComponent } from './pages/fees/add-fee/add-fee.component';
import { EditFeeComponent } from './pages/fees/edit-fee/edit-fee.component';
import { SearchFeeComponent } from './pages/fees/search-fee/search-fee.component';
import { ListFeesComponent } from './pages/fees/list-fees/list-fees.component';
import { ConfirmModalComponent } from './shared/confirm-modal/confirm-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    StudentListComponent,
    PaymentsComponent,
    ReportsComponent,
    StudentAddComponent,
    LoginComponent,
    UpdateStudentComponent,
    AboutComponent,
    RegisterUserComponent,
    UserListComponent,
    UserUpdateComponent,
    ForgotPasswordComponent,
    AddFeeComponent,
    EditFeeComponent,
    SearchFeeComponent,
    ListFeesComponent,
    ConfirmModalComponent,

  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
