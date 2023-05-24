import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, firstValueFrom, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LoggedUserBrief } from '../models/Auth/LoggedUserBrief';
import { Roles } from '../enums/user/user-type';
// import jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root',
})
export class AuthServices {
  isAuthenticated: boolean = false;
  tokenPayLoad: any;

  constructor(private http: HttpClient) {}
  
  login(email: any, password: string): Observable<LoggedUserBrief> {
    const payload = { email: email, password };
    return this.http.post<LoggedUserBrief>('http://localhost:5000/login', payload)
      .pipe(
        tap(token => {
          console.log(token);
          localStorage.setItem('email', email);
          localStorage.setItem('password', password);
          
          if(token.user.is_Admin){
            localStorage.setItem('is_Admin', Roles.admin);
          }else{
            localStorage.setItem('is_Admin', Roles.user);
          }
        })
      );
  }

  logout(): void {
    localStorage.clear();
  }

  getUserEmail(): string | null {
    return localStorage.getItem('email');
  }

  isLoggedIn(): boolean {
    return !!this.getUserEmail();
  }
}
