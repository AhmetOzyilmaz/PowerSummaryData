import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {

  constructor(private jwtHelperService: JwtHelperService) { }
  isAuthorized(allowedRoles: string[]): boolean {
    if (allowedRoles == null || allowedRoles.length === 0) {
      return true;
    }
    const token = localStorage.getItem('token');
    const decodeToken = this.jwtHelperService.decodeToken(token);
    for(let i = 0; i < decodeToken.authorities.length; i++){
      if (allowedRoles.includes(decodeToken.authorities[i])){
        return true;
      }
    }
    return false;
  }
}
