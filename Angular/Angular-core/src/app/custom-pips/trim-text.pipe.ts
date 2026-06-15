import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'trimText',
  standalone: true
})
export class TrimTextPipe implements PipeTransform {

  transform(value: string, ...args: number[]): string {
    if(args.length){
      return value.substring(0, args[0]) + "...";
    }
    return value.substring(0, 10) + "...";
  }
}
