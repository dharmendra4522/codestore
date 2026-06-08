import { Component } from '@angular/core';

@Component({
  selector: 'app-events',
  imports: [],
  templateUrl: './events.html',
  styleUrl: './events.css',
})
export class Events {
  handleEvent(event: any) {
    console.log('Button Clicked!', event.type);
    console.log('Button Clicked!', event.target);
    console.log('Value', event.target.value);
  }
}
