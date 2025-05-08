import { Component } from '@angular/core';
import { UserService } from '../../Services/get-url.service';
import { Hotels } from '../../Models/hotels';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ErrorDialogComponent } from '../../Components/error-dialog/error-dialog.component';

@Component({
  selector: 'app-hotels',
  standalone: true,
  imports: [FormsModule, CommonModule, ErrorDialogComponent],
  templateUrl: './hotels.component.html',
  styleUrl: './hotels.component.scss'
})
export class HotelsComponent {
  hotelArr: Hotels[] = [];
  cities: string[] = [];
  selectedCity: string = '';

  constructor(private https: UserService) {}

  ngOnInit() {
    this.loadCities();
    this.loadAllHotels();
  }

  loadCities() {
    this.https.getCities().subscribe((data: any) => {
      this.cities = data as string[];
    });
  }

  loadAllHotels() {
    this.https.getAllHotels().subscribe(resp => this.displayHotels(resp));
  }

  displayHotels(arr: any) {
    this.hotelArr = arr;
  }

  onCityChange() {
    if (this.selectedCity) {
      this.https.getHotelsByCity(this.selectedCity).subscribe(resp => this.displayHotels(resp));
    } else {
      this.loadAllHotels();
    }
  }
}