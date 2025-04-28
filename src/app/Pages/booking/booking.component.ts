import { Component } from '@angular/core';
import { ErrorDialogComponent } from '../../Components/error-dialog/error-dialog.component';
import { CommonModule } from '@angular/common';
import { Booking } from '../../Models/booking';
import { UserService } from '../../Services/get-url.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-booking',
  standalone: true,
  imports: [ErrorDialogComponent, CommonModule, FormsModule],
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent {

  constructor(private userService: UserService) { }

  booking: Booking = {
    id: 0,
    roomID: 1,
    checkInDate: "2025-04-29T16:52:16.650Z",
    checkOutDate: "2025-04-30T16:52:16.650Z",
    totalPrice: 1,
    isConfirmed: true,
    customerName: "John Doe",
    customerId: "12345",
    customerPhone: "123456789"
  };

  ngOnInit() {
    this.booking.checkInDate = new Date(this.booking.checkInDate).toISOString().slice(0, 16);
    this.booking.checkOutDate = new Date(this.booking.checkOutDate).toISOString().slice(0, 16);
  }

  onSubmit() {
    console.log('Submitting booking:', this.booking);
  
    this.booking.checkInDate = this.booking.checkInDate.slice(0, 16);
    this.booking.checkOutDate = this.booking.checkOutDate.slice(0, 16);
  
    this.userService.postBooking(this.booking).subscribe({
      next: (response) => {
        console.log('Booking successful:', response);
        alert('Booking successful!');
      },
      error: (error) => {
        if (error.status === 400 && error.error === 'The room is already booked for some of the selected dates.') {
          console.error('Booking failed: Room is already booked for the selected dates');
          alert('The room is already booked for the selected dates. Please choose other dates.');
        } else {
          console.error('Booking failed:', error);
          alert('Booking failed! Please try again.');
        }
      }
    });
  }
}  