import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../Services/get-url.service';
import { CommonModule } from '@angular/common';
import { Rooms } from '../../../Models/rooms';
import { forkJoin, Observable } from 'rxjs';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-favorite-rooms',
  templateUrl: './favorite-rooms.component.html',
  styleUrl: './favorite-rooms.component.scss',
  imports: [CommonModule, RouterModule],
  standalone: true
})
export class FavoriteRoomsComponent implements OnInit {
  rooms: Rooms[] = [];
  private favoriteRoomIds = [1, 2, 3, 5, 6, 11];

  constructor(private http: UserService, private router: Router) {}

  ngOnInit(): void {
    const requests: Observable<Rooms>[] = this.favoriteRoomIds.map(id =>
      this.http.getRoomsById(id) as Observable<Rooms>
    );
  
    forkJoin<Rooms[]>(requests).subscribe(
      (responses: Rooms[]) => {
        this.rooms = responses;
        console.log(this.rooms);
      },
      (error) => {
        console.error('Error', error);
      }
    );
    
  }
  navigateToRoomDetails(roomId: number): void {
    this.router.navigate(['/rooms-details', roomId]);
  }
}
