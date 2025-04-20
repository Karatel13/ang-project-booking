import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Rooms } from '../Models/rooms';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private api : ApiService) { }
  baseUrl = 'https://hotelbooking.stepprojects.ge/api/';
  getAllBooking(){
    return this.api.getAll(this.baseUrl + 'Booking');
  }
  getAllHotels(){
    return this.api.getAll(this.baseUrl +'Hotels/GetAll')
  }
  getAllRooms(){
    return this.api.getAll(this.baseUrl +'Rooms/GetAll')
  }
  getHotelById(id : number){
    return this.api.getById(this.baseUrl +'Hotels/GetHotel/', id)
  }
  getRoomsById(id: number) {
    return this.api.getById(this.baseUrl + 'Rooms/GetRoom', id);
  }
  getRoomsType(){
    return this.api.getAll(this.baseUrl +'Rooms/GetRoomTypes')
  }
}
