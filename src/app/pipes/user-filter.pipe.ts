import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'userFilter'
})
export class UserFilterPipe implements PipeTransform {

  transform(value: any, searchElement: any) {
    if (!value) {
      return null;
    }
    if (!searchElement) {
      return value;
    }

    return value.filter((data: any) => {
      return JSON.stringify(data).toLocaleLowerCase().includes(searchElement.toLocaleLowerCase());
    });
  }

}
