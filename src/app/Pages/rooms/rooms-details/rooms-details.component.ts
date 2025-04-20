import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { UserService } from '../../../Services/get-url.service';
import { Rooms } from '../../../Models/rooms';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-room-details',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './rooms-details.component.html',
  styleUrl: './rooms-details.component.scss'
})
export class RoomDetailsComponent implements OnInit {
  room: Rooms = new Rooms();
  imageObject: Array<{ image: string; thumbImage: string }> = [];

  constructor(
    private route: ActivatedRoute,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = +params['id'];
      this.userService.getRoomsById(id).subscribe((resp: any) => {
        this.room = resp;
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
    this.booking.roomID = this.room.id ?? 0;
  
    console.log('Booking submitted:', this.booking);
  }
  
}

