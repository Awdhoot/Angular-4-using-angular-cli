import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myFilterPipe'
})
export class MyFilterPipePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    console.log('value -> ', value, args);
    return value.filter((item: any) => item.toLocaleLowerCase().indexOf(args.toLocaleLowerCase()) > -1 );
  }

}
