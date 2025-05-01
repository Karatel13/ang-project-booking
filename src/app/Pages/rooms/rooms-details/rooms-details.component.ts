import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { UserService } from '../../../Services/get-url.service';
import { Rooms } from '../../../Models/rooms';
import { FormsModule } from '@angular/forms';
import { BookingRoomFormComponent } from './booking-room-form/booking-room-form.component';



@Component({
  selector: 'app-room-details',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, BookingRoomFormComponent,],
  templateUrl: './rooms-details.component.html',
  styleUrl: './rooms-details.component.scss'
})
export class RoomDetailsComponent implements OnInit {
  room: Rooms = new Rooms();
  bookingRoomID?: number = 0;
  imageObject: Array<{ image: string; thumbImage: string }> = [];

  constructor(
    private route: ActivatedRoute,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id =+params['id'];
      this.userService.getRoomsById(id).subscribe((resp: any) => {
        this.room = resp;
        this.bookingRoomID = this.room.id;
      });
    });
  }
  booking = {
    roomID: 0,
    checkInDate: '',
    checkOutDate: '',
    totalPrice: 0,
    isConfirmed: true,
    customerName: '',
    customerId: '',
    customerPhone: ''
  };
  
  submitBooking() {
    if (this.room.id) {
      this.booking.roomID = this.room.id;
      console.log('Booking submitted:', this.booking);
    } else {
      console.error('Room ID is not available');
    }
  }
}


