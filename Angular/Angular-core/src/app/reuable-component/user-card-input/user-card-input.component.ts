import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-user-card-input',
  templateUrl: './user-card-input.component.html',
  styleUrls: ['./user-card-input.component.css']
})
export class UserCardInputComponent {
  private _name: string = "";

  @Input() set name(value: string) {
    if (value !== this._name) {
      this._name = value;
      this.onNameChange(value); // Emit event when name changes
    } else {
      this._name = value; // Update name without emitting event if it's the same
    }
  }
  get name(): string {
    return this._name;
  }
  @Input() role: string = "Developer"; //default value for role
  @Input() isOnline: boolean = false; //default value for isOnline
  
  @Output() usernameChange = new EventEmitter<string>();
  onNameChange(newName: string){
    this.usernameChange.emit(newName);
  }
}
