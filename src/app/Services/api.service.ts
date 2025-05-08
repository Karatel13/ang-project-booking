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

  getById<T>(url: string, id: number): Observable<T> {
    return this.http.get<T>(`${url}/${id}`);
  }
  post(url: string, obj: any): Observable<any> {
    return this.http.post<any>(url, obj);
  }
  post2(url: string, obj: any, options?: { responseType: 'text' }): Observable<string> {
    return this.http.post(url, obj, { responseType: 'text' });
  }
  delete(url: string) {
    return this.http.delete(url);
  }
}
