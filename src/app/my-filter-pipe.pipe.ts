import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myFilterPipe'
})
export class MyFilterPipePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return value.filter((item: string) => item.toLocaleLowerCase().indexOf(args.toLocaleLowerCase()) > -1);
  }

}
