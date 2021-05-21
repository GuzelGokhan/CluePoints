import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(clientList: Array<any>, search: string): any {
    if (clientList && search)
      return clientList.filter(
        (client) =>
          client.name.indexOf(search) > -1 ||
          client.firstname.indexOf(search) > -1
    );
    return clientList;
  }

}
