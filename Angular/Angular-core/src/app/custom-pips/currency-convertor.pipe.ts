import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyConvertor',
  standalone: true
})
export class CurrencyConvertorPipe implements PipeTransform {

  transform(value: number, ...args: number[]): number {
    if(args.length) {
      return value * args[0];
    }
    return value * 90;
  }

}
