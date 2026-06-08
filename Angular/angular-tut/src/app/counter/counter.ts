import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.html',
  styleUrl: './counter.css',
})
export class Counter {
  count: number=0;

  increment() {
    this.count++;
  }

  decrement() {
    this.count--;
  }

  reset() {
    this.count=0;
  }
  
  handleCounter(val:string){
    if(val==='minus'){
      if(this.count>0){
        this.decrement();
      }
    } else if(val==='plus'){
      this.increment();
    } else{
      this.reset();
    }
  }
}
