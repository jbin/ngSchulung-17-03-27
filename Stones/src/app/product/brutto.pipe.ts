import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'brutto'
})
export class BruttoPipe implements PipeTransform {

  transform(value: number, tax?: number): number {
    if (!tax) {
      tax = 19;
    }
    return value * (1 + tax / 100);
  }

}
