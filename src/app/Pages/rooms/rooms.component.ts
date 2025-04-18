import { Component } from '@angular/core';
import { UserService } from '../../Services/get-url.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Rooms } from '../../Models/rooms';
import { Router } from '@angular/router';
import { ErrorDialogComponent } from "../../Components/error-dialog/error-dialog.component";



@Component({
  selector: 'app-rooms',
  standalone: true,
  imports: [CommonModule, FormsModule, ErrorDialogComponent],
  templateUrl: './rooms.component.html',
  styleUrl: './rooms.component.scss'
})
export class RoomsComponent {
  constructor( 
  private http: UserService,
  private router:Router
  ){}
  ngOnInit(){
    this.http.getAllRooms().subscribe((data: any) => {
      this.displayRooms(data);
      console.log(this.roomsArr);
    });
  }
  roomsArr: Rooms []=[]
  displayRooms(arr: any){
    this.roomsArr = arr;
  }
  goToDetails(roomId: number) {
    this.router.navigate(['/details', roomId]);
  }
  


}
