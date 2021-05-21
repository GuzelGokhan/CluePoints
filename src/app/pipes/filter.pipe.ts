import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(clientList: Array<any>, search: string): any {
    console.log(clientList, search);

    if (clientList)
      return clientList.filter((d)=> d.name.indexOf(search) > -1 )
    return clientList;
  }

}
