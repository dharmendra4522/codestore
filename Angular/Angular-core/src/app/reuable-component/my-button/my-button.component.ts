import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-my-button',
  templateUrl: './my-button.component.html',
  styleUrls: ['./my-button.component.css']
})
export class MyButtonComponent {

  @Input() btnText: string = "";
  @Input() btnClass: string = "";

  // EventEmitter is used to emit events from child component to parent component
  // @Output() decorator is used to make the event emitter available to the parent component
  @Output() onBtnClick = new EventEmitter<any>();

  onClick() {
    this.onBtnClick.emit('hii from child component');
  }
}
