import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appChangeColor]',
})
export class ChangeColor {
  constructor() {}

  // this will change the color of the element when the mouse enters and leaves the element
  @HostListener('mouseenter', ['$event'])
  onMouseEnter($event: MouseEvent) {
    ($event.target as HTMLElement).style.color = 'white';
    ($event.target as HTMLElement).style.cursor = 'pointer';
    ($event.target as HTMLElement).style.backgroundColor = 'blue';

  }

  // this will change the color of the element when the mouse leaves the element
  @HostListener('mouseleave', ['$event'])
  onMouseLeave($event: MouseEvent){
    ($event.target as HTMLElement).style.color = '';
    ($event.target as HTMLElement).style.backgroundColor = '';
    ($event.target as HTMLElement).style.cursor = '';
    
  }

}

