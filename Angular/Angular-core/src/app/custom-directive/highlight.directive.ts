import { Directive, ElementRef, HostListener, OnInit } from '@angular/core';

@Directive({
  selector: '[appHighlight]', // The brackets mean it must be used as an attribute
  standalone: true            // Modern standalone architecture configuration
})
export class HighlightDirective implements OnInit {

  // 1. Inject ElementRef into the constructor to gain direct access to the DOM node
  constructor(private el: ElementRef) {}

  // 2. Establish a baseline state when the directive initializes
  ngOnInit() {
    this.setStyles('#6b7280', 'normal'); // Default slate grey color text
  }

  // 3. Listen for the mouse entering the element boundaries
  @HostListener('mouseenter') onMouseEnter() {
    this.setStyles('#2563eb', 'bold');    // Changes to vibrant blue bold text
  }

  // 4. Listen for the mouse leaving the element boundaries
  @HostListener('mouseleave') onMouseLeave() {
    this.setStyles('#6b7280', 'normal'); // Resets back to default slate grey
  }

  // Helper utility method to execute the raw DOM styling transformations safely
  private setStyles(color: string, weight: string) {
    const nativeElement = this.el.nativeElement as HTMLElement;
    nativeElement.style.color = color;
    nativeElement.style.fontWeight = weight;
    nativeElement.style.transition = 'all 0.2s ease-in-out'; // Adds a smooth CSS effect
  }
}