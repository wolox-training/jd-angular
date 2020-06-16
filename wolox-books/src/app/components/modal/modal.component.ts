import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {
  @Input('open')
  open: boolean;

  @Output() openChange = new EventEmitter();

  constructor() {
    this.open = false;
  }

  close() {
    this.openChange.emit(false);
    this.open = false;
  }
}
