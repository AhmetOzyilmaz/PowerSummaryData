import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  CanActivateChild,
  Router
} from '@angular/router';
import { Observable } from 'rxjs';
import {AuthorizationService} from '../service/authorization.service';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationGuard implements CanActivate, CanActivateChild {
  constructor(private authorizationService: AuthorizationService, private router: Router) {}
  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.authorize();
  }
  canActivateChild(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.authorize();
  }

  private authorize(): Observable<boolean> | Promise<boolean> | boolean {
    const isAuthorized = this.authorizationService.isAuthorized();
    if (!isAuthorized) {
      this.router.navigate(['/login']);
    }
    return isAuthorized;
  }

}
