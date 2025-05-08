import { Component } from '@angular/core';
import { ErrorDialogComponent } from '../../Components/error-dialog/error-dialog.component';
import { UserService } from '../../Services/get-url.service';
import { Cancelbooking } from '../../Models/booking';
import { CommonModule } from '@angular/common';
import { Rooms } from '../../Models/rooms';

@Component({
  selector: 'app-booking',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent{
  constructor(private userService: UserService) {}

  bookingArr: Cancelbooking[] = [];
  roomsArr: Rooms[] = [];
  roomImages: { [key: number]: string } = {};

  ngOnInit(): void {
    this.loadBookings();
  }

  loadBookings(): void {
    this.userService.getAllBooking().subscribe({
      next: (response) => {
        this.displayBookings(response);
      },
      error: (err) => {
        console.error('Failed to load bookings:', err);
      }
    });
  }
  getRoomImage(roomID: number): void {
    this.userService.getRoomsById(roomID).subscribe((room: any) => {
      if (room.images && room.images.length > 0) {
        this.roomImages[roomID] = room.images[0]?.source;
      }
    });
  }

  displayBookings(data: any): void {
    this.bookingArr = data;
    console.log(this.bookingArr);

    this.bookingArr.forEach(booking => {
      this.getRoomImage(booking.roomID);
    });
  }

  cancelBooking(booking: Cancelbooking): void {
    if (confirm(`Are you sure you want to cancel the booking for ${booking.customerName}?`)) {
      this.userService.deleteBooking(booking.id).subscribe({
        next: () => {
          this.bookingArr = this.bookingArr.filter(b => b.id !== booking.id);
          alert('Booking has been successfully canceled.');
          console.log('bookingArr after cancel:', this.bookingArr);
        },
        error: (err) => {
          console.error('Error canceling booking:', err);
          alert('Failed to cancel the booking.');
        }
      });
    }
  }
}