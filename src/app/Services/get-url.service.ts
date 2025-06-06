import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import { Booking } from '../Models/booking';
import { Hotels } from '../Models/hotels';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private api : ApiService) { }
  baseUrl = 'https://hotelbooking.stepprojects.ge/api/';
  deleteBooking(id: number) {
    return this.api.delete(`${this.baseUrl}Booking/${id}`);
  }
  getAllBooking(){
    return this.api.getAll(this.baseUrl + 'Booking');
  }
  getAllHotels(){
    return this.api.getAll(this.baseUrl +'Hotels/GetAll')
  }
  getAllRooms(){
    return this.api.getAll(this.baseUrl +'Rooms/GetAll')
  }
  getHotelById(id: number): Observable<Hotels> {
    return this.api.getById<Hotels>(this.baseUrl + 'Hotels/GetHotel', id);
  }
  getCities(){
    return this.api.getAll(this.baseUrl + 'Hotels/GetCities')
  }
  getHotelsByCity(city: string){
    return this.api.getAll(this.baseUrl + `Hotels/GetHotels?city=${city}`)
  }
  getRoomsById(id: number) {
    return this.api.getById(this.baseUrl + 'Rooms/GetRoom', id);
  }
  getRoomsType(){
    return this.api.getAll(this.baseUrl +'Rooms/GetRoomTypes')
  }
  postBooking(obj: Booking): Observable<string> {
    return this.api.post2(`${this.baseUrl}Booking`, obj, {
      responseType: 'text'
    });
  }
  getRoomsWithFilter(filterParams: any): Observable<any> {
    return this.api.post(`${this.baseUrl}Rooms/GetFiltered`, filterParams);
  }

}