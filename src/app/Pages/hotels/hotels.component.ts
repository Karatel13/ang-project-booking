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
  constructor(private https: UserService){}
  ngOnInit(){
    this.https.getAllHotels().subscribe( (resp : any) => {
      console.log(resp)
      this.displayHotels(resp)
  
  })
}
hotelArr: Hotels[] =[]
displayHotels(arr : any){
  this.hotelArr = arr
}
}
