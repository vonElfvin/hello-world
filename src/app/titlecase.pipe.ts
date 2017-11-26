import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titlecase'
})
export class TitlecasePipe implements PipeTransform {

  transform(value: string, args?: any): any {
    let words = value.split(' ');
    let result = "";
    for(let i=0; i<words.length; ++i){
      if(i==0 || (words[i]!="of" && words[i]!="and" && words[i]!="the")){
        result+= words[i].charAt(0).toUpperCase();
        result+= words[i].substr(1, words[i].length);
      }else{
        result += words[i];
      }
      result+= ' ';
    }
    return result;
  }
}
