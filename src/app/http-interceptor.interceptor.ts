import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()
export class HttpInterceptorInterceptor implements HttpInterceptor {

  constructor(private router: Router) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    const email = localStorage.getItem("email");
    const password = localStorage.getItem("password");
    let headers;
    if (email && password) {
      headers = {
        Authorization: `Email: ${email} Password: ${password}`
      };
    }
    request = request.clone({
      setHeaders: headers
    });
    return next.handle(request).pipe(tap(() => { },
      (err: any) => {
        if (err instanceof HttpErrorResponse) {
          if (err.status !== 401 && err.status !=403) {
            return;
          }
          localStorage.clear();
          this.router.navigateByUrl('/');
        }
      }));
  }
}
