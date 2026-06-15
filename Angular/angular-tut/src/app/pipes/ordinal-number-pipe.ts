import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ordinalNumber',
})
export class OrdinalNumberPipe implements PipeTransform {
  transform(value: number, ...args: unknown[]): string {
    if(value === null || value === undefined || isNaN(value)) return '';

    const reminderTen = value % 10;
    const reminderHundred = value % 100;
    if (reminderTen === 11 || reminderHundred === 12 || reminderHundred === 13) {
      return value + 'th';

    }
    switch(reminderTen) {
      case 1:
        return value + 'st';
      case 2:
        return value + 'nd';
      case 3:
        return value + 'rd';
      default:
        return value + 'th';
    }
  }
}
