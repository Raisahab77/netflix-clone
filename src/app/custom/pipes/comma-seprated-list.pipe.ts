import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'commaSepratedList'
})
export class CommaSepratedListPipe implements PipeTransform {

  transform(value: any, ...args: unknown[]): unknown {
    if(value == null || value == undefined){
      return "N/A";
    }
    return value.map((val:any )=> val.name);
  }

}
