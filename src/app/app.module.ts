import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RegisterComponent } from './pages/register/register.component';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { NavbarComponent } from './pages/shared/navbar/navbar.component';
import { FooterComponent } from './pages/shared/footer/footer.component';
import { AppRoutingModule } from './app-routing.module';
import { AdminDashboardComponent } from './pages/admin-dashboard/admin-dashboard.component';
import { MainLayoutComponent } from './pages/main-layout/main-layout.component';
import { MainScreenComponent } from './pages/main-screen/main-screen.component';
import { UserDashboardComponent } from './pages/user-dashboard/user-dashboard.component';
import { IconsModule } from './modules/icons/icons.module';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { FormsModule } from '@angular/forms';
import { UserService } from './services/user.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BmiCalComponent } from './pages/bmi-cal/bmi-cal.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { DashboardComponent } from './pages/admin-dashboard/components/dashboard/dashboard.component';
import { ContactUsComponent } from './pages/admin-dashboard/components/contact-us/contact-us.component';
import { AdminProfileComponent } from './pages/admin-dashboard/components/admin-profile/admin-profile.component';
import { PaginationComponent } from './pagination/pagination.component';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    NavbarComponent,
    LoginComponent,
    ProfileComponent,
    FooterComponent,
    MainLayoutComponent,
    UserDashboardComponent,
    AdminDashboardComponent,
    MainScreenComponent,
    NotFoundComponent,
    BmiCalComponent,
    AboutUsComponent,
    DashboardComponent,
    ContactUsComponent,
    AdminProfileComponent,
    PaginationComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IconsModule,
    FormsModule,
    HttpClientModule,
    NgbPaginationModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
