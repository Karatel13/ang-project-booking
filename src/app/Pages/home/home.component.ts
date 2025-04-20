import { Component } from '@angular/core';
import { FavoriteRoomsComponent } from "./favorite-rooms/favorite-rooms.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FavoriteRoomsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
