import { Component } from '@angular/core';
import { ErrorDialogComponent } from '../../Components/error-dialog/error-dialog.component';
import { UserService } from '../../Services/get-url.service';
import { Booking } from '../../Models/booking';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-booking',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent {
  constructor(private http: UserService){}
  bookingArr: Booking[] = [];
  ngOnInit(){
    this.http.getAllBooking().subscribe(resp => {
      console.log(resp);
      this.displayBookings(resp);
    });
  }
  displayBookings(arr: any){
    this.bookingArr = arr;
  }
}  