import { Component,Input, SimpleChanges } from '@angular/core';
import { ErrorDialogComponent } from '../../../../Components/error-dialog/error-dialog.component';
import { CommonModule } from '@angular/common';
import { Booking } from '../../../../Models/booking';
import { UserService } from '../../../../Services/get-url.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-booking-room-form',
  standalone: true,
  imports: [ErrorDialogComponent, CommonModule, FormsModule],
  templateUrl: './booking-room-form.component.html',
  styleUrl: './booking-room-form.component.scss'
})
export class BookingRoomFormComponent{

  @Input() roomId!: number;
  allBookings: Booking[] = [];
  bookedDates: string[] = [];

  booking: Booking = {
    id: 0,
    roomID: 0,
    checkInDate: '',
    checkOutDate: '',
    totalPrice: 0,
    isConfirmed: true,
    customerName: '',
    customerId: '',
    customerPhone: ''
  };

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    if (this.roomId) {
      this.getRoomBookedDates(this.roomId);
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['roomId'] && this.roomId) {
      this.booking.roomID = this.roomId;
      console.log('roomID set from Input:', this.roomId);
      this.getRoomBookedDates(this.roomId);
    }
  }

  getRoomBookedDates(roomId: number) {
    this.userService.getRoomsById(roomId).subscribe((room: any) => {
      if (room && room.bookedDates) {
        this.bookedDates = room.bookedDates.map((booking: any) => booking.date);
        console.log('Booked dates for room', roomId, ':', this.bookedDates);
      } else {
        console.log('No booked dates found for room', roomId);
      }
    }, error => {
      console.error('Error fetching room data:', error);
    });
  }

  onSubmit() {
    if (!this.booking.roomID) {
      console.error('Room ID is not set');
      alert('Room ID is missing');
      return;
    }

    console.log('Booking to be submitted:', this.booking);

    this.userService.postBooking(this.booking).subscribe({
      next: (response) => {
        console.log('Booking successful:', response);
        alert('Booking successful!');
      },
      error: (error) => {
        console.error('Booking error:', error);
        alert('Booking failed');
      }
    });
  }
}