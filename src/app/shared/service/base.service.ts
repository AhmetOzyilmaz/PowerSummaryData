import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable, Optional } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

interface Config {
  pageable?: true;
  [key: string]: any;
}

@Injectable({
  providedIn: 'root',
})
export abstract class BaseService {

  baseApiUrl: string;

  constructor(public httpClient: HttpClient, 
              public router: Router) {
    this.baseApiUrl = "http:localhost:8080";
  }


  abstract getPath(): string;

  abstract getHttpParams(): HttpParams;

  protected get<T>(url?: string, config?: Config): Observable<T> {
    if (this.getHttpParams() && (config === undefined || (config && config.pageable))) {
      return this.httpClient.get<T>(this.getFullPath(url), {params: this.getHttpParams()});
    } else {
      return this.httpClient.get<T>(this.getFullPath(url));
    }
  }

  protected post<T>(url?: string, body?: any, params?: HttpParams) {
    if (params) {
      return this.httpClient.post<T>(this.getFullPath(url), {params}, {params});
    } else {
      return this.httpClient.post<T>(this.getFullPath(url), body);
    }
  }

  protected put<T>(url?: string, body?: any, params?: HttpParams): Observable<T> {
    if (params) {
      return this.httpClient.put<T>(this.getFullPath(url), {params}, {params});
    } else {
      return this.httpClient.put<T>(this.getFullPath(url), body);
    }
  }

  protected purePost<T>(url: string, body?: any): Observable<T> {
    const generatedUrl = `${ this.baseApiUrl }/${ url }`;
    return this.httpClient.post<T>(generatedUrl, body);
  }

  protected pureGet<T>(url: string): Observable<T> {
    const generatedUrl = `${ this.baseApiUrl }/${ url }`;
    return this.httpClient.get<T>(generatedUrl);
  }

  protected delete<T>(url?: string): Observable<T> {
    return this.httpClient.delete<T>(this.getFullPath(url));
  }

  private getFullPath(url: string | undefined): string {
    let fullPath: string;
    if (url && url.length > 0) {
      fullPath = `${ this.baseApiUrl }/api/${ this.getPath() }/${ url }`;
    } else {
      fullPath = `${ this.baseApiUrl }/api/${ this.getPath() }`;
    }
    return fullPath;
  }

  protected downloadFile(url?: string, body?: any, headers?: HttpHeaders) {
    return this.httpClient.post(this.getFullPath(url), body,{ headers: headers, responseType: 'blob'}); }
}
