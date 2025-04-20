import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { UserService } from '../../../Services/get-url.service';
import { Rooms } from '../../../Models/rooms';



@Component({
  selector: 'app-room-details',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './rooms-details.component.html',
  styleUrl: './rooms-details.component.scss'
})
export class RoomDetailsComponent implements OnInit {
  room: Rooms = new Rooms();
  imageObject: Array<{ image: string; thumbImage: string }> = [];

  constructor(
    private route: ActivatedRoute,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = +params['id'];
      this.userService.getRoomsById(id).subscribe((resp: any) => {
        this.room = resp;
      });
    });
  }
}

