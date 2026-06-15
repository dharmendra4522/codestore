import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { AlertComponent } from '../reuable-component/alert/alert.component';
import { TimerComponent } from '../reuable-component/timer/timer.component';

@Component({
  selector: 'app-view-chield',
  templateUrl: './view-chield.component.html',
  styleUrls: ['./view-chield.component.css']
})
export class ViewChieldComponent implements AfterViewInit {
  // @ViewChild() decorator is used to access a child component or a DOM element in the template
  // Here, we are accessing an input element with the template reference variable 'txt' and storing it in the 'textBox' property of type ElementRef
  @ViewChild('txt') textBox?: ElementRef;
  // Accessing the AlertComponent using @ViewChild decorator
  @ViewChild(AlertComponent) alertComponent?: AlertComponent;

  ngAfterViewInit(): void {
    const value = this.textBox?.nativeElement.value;
    debugger;
    const alertMode = this.alertComponent?.alertMode;
  }

  // Method to trigger the startTimer method of the TimerComponent
  @ViewChild('timerComponent') timerComponent?: TimerComponent; 
  triggerChildTimer() {
    // Assuming you have a reference to the TimerComponent, you can call its startTimer method here
    // For example, if you have a ViewChild reference to the TimerComponent, you can do something like this:
    // this.timerComponent.startTimer();
    this.timerComponent?.startTimer();
    debugger;
  }

  stopChildTimer(){
    this.timerComponent?.stopTimer();
    debugger;
  }

  resetChildTimer(){
    this.timerComponent?.resetTimer();
    debugger;
  }
}
