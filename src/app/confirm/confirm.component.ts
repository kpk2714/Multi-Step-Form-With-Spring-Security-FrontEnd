import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.css']
})
export class ConfirmComponent {

  @Input() title: string = 'Confirm';
  @Input() message: string = 'Are you sure?';
  @Input() isVisible: boolean = false;
  @Output() confirm = new EventEmitter<boolean>();

  onConfirm(): void {
    this.confirm.emit(true);
    this.isVisible = false;
  }

  onCancel(): void {
    this.confirm.emit(false);
    this.isVisible = false;
  }

  onClose(): void {
    this.confirm.emit(false);
    this.isVisible = false;
  }
}
