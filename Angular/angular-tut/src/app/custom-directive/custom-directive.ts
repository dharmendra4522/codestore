import { Component } from '@angular/core';
import { NumberOnly } from '../directives/number-only';
import { ChangeColor } from '../directives/change-color';

@Component({
  selector: 'app-custom-directive',
  imports: [NumberOnly, ChangeColor],
  templateUrl: './custom-directive.html',
  styleUrl: './custom-directive.css',
})
export class CustomDirective {}
