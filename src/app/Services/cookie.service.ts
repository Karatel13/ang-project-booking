import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class cookie_services {

  constructor(private cookieService : CookieService ) { }

  setCookie(key: string, value: string, expires: number = 5) {
    this.cookieService.set('token','value',5);
  }
  deleteCookie() {
    this.cookieService.delete('token');
  }
  getCookie() {
    
    return this.cookieService.get('token');
  }
}
