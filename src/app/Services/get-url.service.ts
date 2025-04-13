import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private api : ApiService) { }
  getAllBooking(){
    return this.api.getAll('https://hotelbooking.stepprojects.ge/api/Booking')
  }
  getAllHotels(){
    return this.api.getAll('https://hotelbooking.stepprojects.ge/api/Hotels/GetAll')
  }
  getAllRooms(){
    return this.api.getAll('https://hotelbooking.stepprojects.ge/api/Rooms/GetAll')
  }
  getHotelById(id : number){
    return this.api.getById('https://hotelbooking.stepprojects.ge/api/Hotels/GetHotel/', id)
  }
  getRoomsById(id : number){
    return this.api.getById('https://hotelbooking.stepprojects.ge/api/Rooms/GetRooms/', id)
  }
}
