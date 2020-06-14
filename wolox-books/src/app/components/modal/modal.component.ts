import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  @Input('open')
  open: boolean = false;

  @Output() openChange = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  close() {
    this.openChange.emit(false);
    this.open = false;
  }

}
