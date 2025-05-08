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
    roomID: 0,
    checkInDate: new Date,
    checkOutDate: new Date,
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
   
        console.log('Response:', response);
      },
      error: (err) => {
        if (err.status === 200 && err.error && err.error.text) {
   
          const successMessage = err.error.text;
          const bookingIdMatch = successMessage.match(/Booking Id (\d+)/);
          const bookingId = bookingIdMatch ? bookingIdMatch[1] : 'unknown';
         
          console.log('Booking successful:', successMessage);
          alert(`დაჯავშნა წარმატებულია! ჯავშნის ID: ${bookingId}`);
          localStorage.setItem("bookinId", bookingId)
        }
        else if (err.error && err.error.message) {
          console.error('დაჯავშნის შეცდომა:', err.error.message);
          alert('დაჯავშნის შეცდომა: ' + err.error.message);
        }
        else if (err.message) {
          console.error('დაჯავშნის შეცდომა:', err);
          alert('დაჯავშნის შეცდომა: ' + err.message);
        }
        else {
          console.error('Unknown error:', err);
          alert('მოხდა უცნობი შეცდომა');
        }
      }
    });
  }
}