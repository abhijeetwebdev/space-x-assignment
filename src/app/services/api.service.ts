import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiBaseUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  /**
   * GET Function
   */
  get(path: string) {
    return this.http.get(this.apiBaseUrl + path)
      .pipe(map(res => res));
  }

  /**
   * GET Function with params
   * @param path 
   */
  getWithParams(endpoint: string, data: Object = {}) {
    if (data) {
      endpoint += '?' + this.buildParams(data);
    }
    return this.http.get(this.apiBaseUrl + endpoint)
      .pipe(map(res => res));
  }

  /**
   * Helper function for GET request
   * @param object 
   */
  private buildParams(object: Object) {
    return Object.keys(object)
      .map(k => {
        return encodeURIComponent(k) + '=' + encodeURIComponent(object[k]);
      }).join('&');
  }
}
