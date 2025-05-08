import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-alert',
  imports: [CommonModule],
  templateUrl: './alert.component.html',
  styleUrl: './alert.component.scss'
})
export class AlertComponent{

  @Input() message: string = ''; 
  @Input() type: string = 'info';
  @Input() duration: number = 3000;
  @Output() onClose = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {

    setTimeout(() => {
      this.closeAlert();
    }, this.duration);
  }

  closeAlert() {
    this.onClose.emit();
  }

}
