import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Booking } from '../Models/booking';

@Injectable({
  providedIn: 'root'
})
export class CommandUrlService {

  constructor(private api: ApiService) { }
  postBooking(obj: Booking) {
    return this.api.post('https://hotelbooking.stepprojects.ge/api/Booking', obj);
  }
  
}
