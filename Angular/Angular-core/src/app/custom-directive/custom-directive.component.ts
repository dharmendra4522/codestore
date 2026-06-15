import { Component } from '@angular/core';
import { HighlightDirective } from './highlight.directive';

@Component({
  selector: 'app-custom-directive',
  standalone: true,
  imports: [HighlightDirective],
  templateUrl: './custom-directive.component.html', // Register it inside your imports block layout array
  styleUrls: ['./custom-directive.component.css']
})
export class CustomDirectiveComponent {

}
