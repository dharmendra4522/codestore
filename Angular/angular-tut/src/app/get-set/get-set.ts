import { Component } from '@angular/core';

@Component({
  selector: 'app-get-set',
  imports: [],
  templateUrl: './get-set.html',
  styleUrl: './get-set.css',
})
export class GetSet {
  name: string = "";
  displayName: string = "";
  email = "";

  getName(event: Event) {
    this.name = (event.target as HTMLInputElement).value;
    return this.name;
  }
  showName() {
    this.displayName = this.name;
  }
  setName() {
    this.name = "Dharm";
  }

  getEmail(val: string) {
    console.log(val);
    this.email = val;
  }
  setEmail() {
    this.email = "default@gmail.com";
  }
}
