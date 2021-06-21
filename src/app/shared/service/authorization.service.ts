import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {

  constructor() { }
  isAuthorized(): boolean {
    const token = localStorage.getItem('token');
    if(token)
      return true;
    return false;
  }
}
