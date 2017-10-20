import {DataSource} from "@angular/cdk/collections";
import {Observable} from "rxjs/Observable";

export interface IProjectData {
    title: string;
    company: string;
    date: string;
    keys: Array<string>;
    contents: Array<string>;
}