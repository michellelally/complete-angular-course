import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
    name: "titleCasing"
})
export class TitleCasingPipe implements PipeTransform {

    transform(value: string, args?: any): string {
        if (!value) return value;

        let words = value.split(' ');
        for (var i = 0; i < words.length; i++) {
            if (i > 0 && this.isPreposition(words[i]))
                words[i] = words[i].toLowerCase();
            else {
                words[i] = this.toTitleCase(words[i]);
            }
        }

        return words.join(' '); 
    }

    private isPreposition(word:string): boolean {
        let prepositions = [
            'of', 'the', 'and'
        ];

        return prepositions.includes(word.toLowerCase());
         
    }

    private toTitleCase(word:string): string {
        return word.substr(0, 1).toUpperCase() + word.substr(1).toLowerCase();

    }
}