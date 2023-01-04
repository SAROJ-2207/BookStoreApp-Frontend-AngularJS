import { Pipe, PipeTransform } from '@angular/core';
import { filter } from 'rxjs';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {


  transform(value : any, searchTerm : any):any{
    return value.filter(function(search:any){
      return search.bookName.indexOf(searchTerm) > -1;
    })
  }

}
