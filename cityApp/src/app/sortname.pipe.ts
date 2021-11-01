import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortname'
})
export class SortnamePipe implements PipeTransform {

  transform(value: Array<any>, ...args: unknown[]): unknown {

    return value.sort((a, b) => {
      let x = a.cost;
      let y = b.cost;
      if (x < y) {
        return -1;
      }
      else {
        return 1;
      }
      return 0;


    });
  }

}
