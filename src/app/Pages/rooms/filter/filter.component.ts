import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RoomFilter } from '../../../Models/roomFilter';
import { UserService } from '../../../Services/get-url.service';


@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.scss'
})

export class FilterComponent {
  constructor(private http: UserService) {}
  
  roomTypeId: number | null = null;
  priceFrom: number = 0;
  priceTo: number = 1000;
  maximumGuests: number | null = null;
  checkIn: string = '';
  checkOut: string = '';
  roomTypes: any[] = [];
  guestsOptions: number[] = [1, 2, 3, 4, 5, 6];

  @Output() filtersChanged = new EventEmitter<RoomFilter>();
  
  ngOnInit() {
    this.http.getRoomsType().subscribe((data: any) => {
      this.roomTypes = data;
    });
  }
  applyFilters() {
    const filter: RoomFilter = {
      roomTypeId: this.roomTypeId ?? 0,
      priceFrom: this.priceFrom,
      priceTo: this.priceTo,
      maximumGuests: this.maximumGuests ?? 0, 
      checkIn: this.checkIn,
      checkOut: this.checkOut
    };
    this.filtersChanged.emit(filter);
  }
  
}
