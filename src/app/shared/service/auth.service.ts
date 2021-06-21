import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService extends BaseService {

  getHttpParams(): HttpParams {
    return new HttpParams();
  }

  getPath(): string {
    return 'auth';
  }

}
