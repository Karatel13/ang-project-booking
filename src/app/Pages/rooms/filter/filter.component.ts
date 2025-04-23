import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RoomFilter } from '../../../Models/roomFilter';

@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.scss'
})
export class FilterComponent {
  roomTypeId: number = 0;
  priceFrom: number = 0;
  priceTo: number = 0;
  maximumGuests: number = 0;
  checkIn: string = '';
  checkOut: string = '';

  @Output() filtersChanged = new EventEmitter<RoomFilter>();

  applyFilters() {
    const filter: RoomFilter = {
      roomTypeId: this.roomTypeId,
      priceFrom: this.priceFrom,
      priceTo: this.priceTo,
      maximumGuests: this.maximumGuests,
      checkIn: this.checkIn,
      checkOut: this.checkOut
    };
    this.filtersChanged.emit(filter);
  }
}
