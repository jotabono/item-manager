import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort',
  pure: false
})
export class SortPipe implements PipeTransform {

  transform(value: any[], criteria: SortCriteria): any[] {
    if (!value || !criteria) {
      return value;
    }

    const p: string = criteria.property;

    const sortFn: (a: any, b: any) => any = (a, b) => {
      let newValue = 0;
      if (a[p] === undefined) {
        newValue = -1;
      }
      else if (b[p] === undefined) {
        newValue = 1;
      }
      else {
        newValue = a[p] > b[p] ? 1 : (b[p] > a[p] ? -1 : 0);
      }
      return criteria.descending ? (newValue * -1) : newValue;
    };

    value.sort(sortFn);
    return value;
  }

}

export interface SortCriteria {
  property: string;
  descending?: boolean;
}
