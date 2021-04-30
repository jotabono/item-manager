import { Pipe, PipeTransform } from "@angular/core";
import { orderBy } from 'lodash';

@Pipe({
 name: "order"
})
export class OrderPipe  implements PipeTransform {
 transform(array: any, sortBy: string, order ): any[] {
 const sortOrder = order ? order : 'asc'; // setting default ascending order

  return orderBy(array, [sortBy], [sortOrder]);
  }
}