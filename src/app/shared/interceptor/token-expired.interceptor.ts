import { Injectable } from '@angular/core';
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable()
export class TokenExpiredInterceptor implements HttpInterceptor {

  constructor(private router: Router
  ) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request)
      .pipe(
        catchError(err => {
          if (err instanceof HttpErrorResponse) {
            if (err.status === 401) {
              alert('token-expired-interceptor.login-enter-error');
              localStorage.clear();
              this.router.navigateByUrl('login');
              return of(null);
            }else if (err.status === 400) {
              alert(`error-handling.${err.error.errorMessage}`);
            }else{
              alert(err.error.resultCode + err.error.errorMessage);
            }
          }
          return of(err.error.message);
        })
      );
  }
}
