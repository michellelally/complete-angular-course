import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
    name: "titleCasing"
})
export class TitleCasingPipe implements PipeTransform {

    transform(value: string, args?: any): string {
        if (!value) return value;
        if (typeof value !== 'string') {
          throw Error("Not a String");
        }

        if (value.substr(1) != "the" || value.substr(1) != "of")
           return value[0].toUpperCase() + value.substr(1).toLowerCase();
        else
            return value;
      
    }

}