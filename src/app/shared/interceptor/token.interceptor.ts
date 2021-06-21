import {Injectable} from '@angular/core';
import {HttpInterceptor, HttpEvent, HttpHandler, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';

export const isSkipAuthHeader = ['login-init', 'otp', 'register-init', 'activate','login-complete'];

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = localStorage.getItem('token');
    const tokenizedReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });
    let shouldSkip = false;
    isSkipAuthHeader.forEach(item => {
      if (req.url.includes(item)) {
        shouldSkip = true;
      }
    });

    if (!shouldSkip && token != null) {
      const tokenizedReq = req.clone({

        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      });
      return next.handle(tokenizedReq);
    }
    return next.handle(req);
  }
}
