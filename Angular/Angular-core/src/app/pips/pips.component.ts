import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { TrimTextPipe } from '../custom-pips/trim-text.pipe';
import { CurrencyConvertorPipe } from '../custom-pips/currency-convertor.pipe';

@Component({
  selector: 'app-pips',
  standalone: true,
  imports: [CommonModule, TrimTextPipe, CurrencyConvertorPipe],          
  templateUrl: './pips.component.html',
  styleUrls: ['./pips.component.css']
})
export class PipsComponent {
  title = signal('pips component');
  name = signal("");
  amount = 100;
  date="09-06-2026";
  mobile="noika"
  today = new Date(); 
  user = signal({
    name: "john",
    age: 30,
    email: "john@gmail.com"
  });

  // custom pipe
  custom = signal("angular pips");
  customAmount = signal(100);

}
