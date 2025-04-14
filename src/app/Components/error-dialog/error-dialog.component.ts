import { Component } from '@angular/core';
import { ErrorhandlerService } from '../../Services/errorhandler.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-error-dialog',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './error-dialog.component.html',
  styleUrl: './error-dialog.component.scss'
})
export class ErrorDialogComponent {
  constructor(private erroHandler : ErrorhandlerService){
    this.erroHandler.dialogState.subscribe(
      state => {
        this.showDialog = state.show
        this.erroMessage = state.message
      }
    )
}

erroMessage =""
showDialog :boolean = false
closeDialog(){
 this.showDialog = false
 this.erroHandler.hideDialog()
 
}

}

