import {Injectable} from '@angular/core';
import {HttpInterceptor, HttpEvent, HttpHandler, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from "../../../environments/environment";

export const isSkipAuthHeader = ['login-init', 'otp', 'register-init', 'activate','login-complete'];

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = localStorage.getItem('token');
    if (request.url.startsWith(environment.baseUrl) && token) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ` + token
        }
      });
    }
    return next.handle(request);
  }
}
