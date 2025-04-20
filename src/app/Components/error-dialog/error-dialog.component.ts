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
  constructor(private errorHandler : ErrorhandlerService){
    this.errorHandler.dialogState.subscribe(
      state => {
        this.showDialog = state.show
        this.errorMessage = state.message
      }
    )
}

errorMessage =""
showDialog :boolean = false
closeDialog(){
 this.showDialog = false
 this.errorHandler.hideDialog()
 
}

}

