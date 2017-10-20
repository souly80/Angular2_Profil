import {DataSource} from "@angular/cdk/collections";
import {Observable} from "rxjs/Observable";
import {ContentType} from "@angular/http/src/enums";

export interface IContentType {
    tableContentType: TableContentType;
}

export interface IContentValue extends  IContentType{
    key: string;
    value: Array<string>;
}

export interface ITrainingDonwloadData extends IContentType {
    title: string;
    path: string;
}

export interface IPersonalData extends IContentType {
    tdName:string;
    tdValue:string;
}

export interface IProfilData extends IContentType,IContentValue {
    company: string;
    art: string;
    realisation: string;
    tasks: Array<string>;
}

export  enum TableContentType {
    CONTENTVALUE_TABLE,
    PERSONAL_TABLE,
    PROFIL_TABLE,

}

export class TableTypeEntries {
    public profilTable: TableContentType = TableContentType.PROFIL_TABLE;
    public contentValueTable: TableContentType = TableContentType.CONTENTVALUE_TABLE;
}

/**
 * Data source to provide what data should be rendered in the table. The observable provided
 * in connect should emit exactly the data that should be rendered by the table. If the data is
 * altered, the observable should emit that new set of data on the stream. In our case here,
 * we return a stream that contains only one set of data that doesn't change.
 */
export class TableDataSource<T> extends DataSource<T> {

    data: T[];
    constructor(data: T[]) {
        super();
        this.data = data;
    }

    /** Connect function called by the table to retrieve one stream containing the data to render. */
    connect(): Observable<T[]> {
        return Observable.of(this.data);
    }

    disconnect() {}
}