import { Component } from '@angular/core';

@Component({
  selector: 'app-card-input',
  templateUrl: './card-input.component.html',
  styleUrls: ['./card-input.component.css']
})
export class CardInputComponent {
  onNameChange(newName: String){
    console.log("Name changed to: ", newName);
  }
}
