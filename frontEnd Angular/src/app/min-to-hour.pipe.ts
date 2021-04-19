import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'minToHour'
})
export class MinToHourPipe implements PipeTransform {
  hour:string="";
  transform(value: number): string {

    if (value>60){
      this.hour=""+Math.floor(value/60)+" שעות "+value%60+" דקות ";
    }
    else{
      this.hour=""+value;
    }
    return this.hour;
  }

}
