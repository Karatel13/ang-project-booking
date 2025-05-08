import { Component } from '@angular/core';
import { Hotels } from '../../../Models/hotels';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../../Services/get-url.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-hotels-details',
  imports: [CommonModule],
  templateUrl: './hotels-details.component.html',
  styleUrl: './hotels-details.component.scss'
})
export class HotelDetailsComponent{
  hotel!: Hotels;

  constructor(
    private route: ActivatedRoute,
    private service: UserService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (id) {
      this.service.getHotelById(id).subscribe({
        next: (data: Hotels) => this.hotel = data,
        error: (err) => console.error('Error loading hotel:', err)
      });
    }
  }
  onRoomClick(roomId: number): void {
    this.router.navigate([`/rooms-details/${roomId}`]);
  }
}
