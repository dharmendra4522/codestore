import { Component, signal } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
import { Login } from './login/login';
import { Signup } from './signup/signup';
import { ProfileComponent } from './profile/profile';
import { Datatype } from './datatype/datatype';
import { Counter } from './counter/counter';
import { Events } from './events/events';

@Component({
  selector: 'app-root',
  imports: [Login, Signup, ProfileComponent, Datatype, Counter, Events],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('1st Angular App');
  name: string = 'Dharmendra';
  x = 10;
  y = 20;

  // fumction for button click
  handleClick() {
    console.log('Button clicked!');
    this.otherFunction(); //this will call the other function when the button is clicked
  }

  otherFunction(){
    console.log('Other function called!');
  }
  updateName(){
    this.name = 'Dharmendra Vishvkarme';
  }
}
