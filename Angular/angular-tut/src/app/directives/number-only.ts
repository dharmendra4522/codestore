import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appNumberOnly]',
})
export class NumberOnly {
  constructor() { }

  // this will allow only numbers to be entered in the input field
  @HostListener('keydown', ['$event'])
  onKeyDown(event: KeyboardEvent) {
    const allowedKeys = ['Backspace', 'Tab', 'ArrowLeft', 'ArrowRight', 'Delete'];
    if ((event.key >= '0' && event.key <= '9') || allowedKeys.includes(event.key) || (event.key >= 'Numpad0' && event.key <= 'Numpad9')) {
      return;
    } else {
      event.preventDefault();
    }
  }

  // prevent pasting non-numeric values in the input field
  @HostListener('paste', ['$event'])
  onPaste(event: ClipboardEvent) {
    const clipboardData: DataTransfer = event.clipboardData || (window as any).clickboardData;
    const pastedText = clipboardData.getData('text');
    if (!/^\d+$/.test(pastedText)) {
      event.preventDefault();
    }
  }
}
