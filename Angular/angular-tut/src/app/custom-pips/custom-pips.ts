import { Component } from '@angular/core';
import { OrdinalNumberPipe } from '../pipes/ordinal-number-pipe';

@Component({
  selector: 'app-custom-pips',
  standalone: true,
  imports: [OrdinalNumberPipe],
  templateUrl: './custom-pips.html',
  styleUrl: './custom-pips.css',
})
export class CustomPips {
  rankingList: number[] = [1, 2, 3, 4, 11, 12, 13, 21, 22, 23];
}
