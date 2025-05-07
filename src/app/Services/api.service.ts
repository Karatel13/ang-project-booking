import { HttpClient, HttpHeaders, HttpParams, HttpContext, HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getAll(url: string) {
    return this.http.get(url);
  }

  getById(url: string, id: number) {
    return this.http.get(`${url}/${id}`);
  }

  post(url: string, obj: any, options?: { responseType: 'text' }): Observable<string> {
    return this.http.post(url, obj, { responseType: 'text' });
  }
  delete(url: string) {
    return this.http.delete(url);
  }
}
