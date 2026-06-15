import { Component } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent {

  //  Create a Child Component with a method - Imagine you have a timer child component that manages its own count.
    counter: number = 0;
    timerId: any = null; // To store the interval ID for later clearing

    startTimer() {
      if (this.timerId) {
        // If the timer is already running, do not start another one
        return;
      }
        this.timerId = setInterval(() => {
            this.counter++;
            if (this.counter === 10) {
                alert('Counter reached 10!');
            }
        }, 1000);
    }
    
    stopTimer(){
        clearInterval(this.timerId);
        this.timerId = null; // Reset the timer ID
    }

    resetTimer(){
        this.stopTimer();
        this.counter = 0;
    }
}
      