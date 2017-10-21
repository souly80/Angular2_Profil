import {Pipe, PipeTransform} from "@angular/core";

export interface IDownloadData {
    title: string;
    path: string;
    iconPath: string;
}

@Pipe({name: 'keys'})
export class KeysPipe implements PipeTransform {
    transform(map: any, args: string[]): any[] {
        var retValues: any[] = [];
        let entry = map.next();
        while (!entry.done) {
            retValues.push({key: entry.value[0], value: entry.value[1]});
            entry = map.next();
        }
        return retValues;
    }
}