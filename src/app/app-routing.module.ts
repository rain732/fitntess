import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { RegisterComponent } from './pages/register/register.component';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { HttpInterceptorInterceptor } from './http-interceptor.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { MainLayoutComponent } from './pages/main-layout/main-layout.component';
import { MainScreenComponent } from './pages/main-screen/main-screen.component';
import { UserDashboardComponent } from './pages/user-dashboard/user-dashboard.component';
import { AdminDashboardComponent } from './pages/admin-dashboard/admin-dashboard.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

const routes = [
  {
    path: '',
    component: AppComponent,
      children: [
        { path: '',component: MainLayoutComponent,
          children: [
            { path: '',component: MainScreenComponent}
          ]
        },
        { path: 'profile',component: ProfileComponent},
        { path: 'user-dashboard',component: UserDashboardComponent},
        { path: 'admin-dashboard',component: AdminDashboardComponent}
    ],
  },
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'not-found', component: NotFoundComponent},
  { path: '**', redirectTo: 'not-found'},
]

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptorInterceptor,
      multi: true,
    }
  ],
})
export class AppRoutingModule { }
