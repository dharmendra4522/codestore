import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent {
  // @Input() decorator is used to receive data from parent component
  @Input() message: string = "";
  @Input() alertType: string = "";

  // default value for view child component
  alertMode: string = "demo";
}
