import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any,filterString:string) {
    // if(value.length===0)
    // {
    // return value;
    // }

    // const users=[];
    // for(const user of value){
    //   if(user['name']===filterString){
    //   users.push(user)
    //   }
    // }
    // return users;
    return value.filter(function(search:any){
return search.department.indexOf(filterString)>1;
    })
  }

}
