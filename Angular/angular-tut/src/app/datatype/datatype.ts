import { Component } from '@angular/core';

@Component({
  selector: 'app-datatype',
  imports: [],
  templateUrl: './datatype.html',
  styleUrl: './datatype.css',
})
export class Datatype {
  name: string = 'Dharmendra';

  sum(a:number, b: number) {
    console.log('Sum is: ', a + b);
  }
}
