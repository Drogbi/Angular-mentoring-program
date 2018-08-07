import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'formatMinutes' })
export class FormatMinutesPipe implements PipeTransform {
    transform(value: string) {
        const hours = Math.floor(+value / 60);
        const minutes = +value - hours * 60;
        return hours ? `${hours}h ${minutes}min` : `${minutes}min`;
    }
}
