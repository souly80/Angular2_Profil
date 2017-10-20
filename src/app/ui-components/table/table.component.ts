import {Component, Input, OnInit} from '@angular/core';
import {IContentValue, IProfilData, TableDataSource, TableTypeEntries} from "../../profil-view/profil-view.interface";
import {el} from "@angular/platform-browser/testing/src/browser_util";

/**
 * @title Basic table
 */
@Component({
    selector: 'table-component',
    styleUrls: ['./table.style.css'],
    templateUrl: './table.component.html',
})
export class TableComponent implements OnInit {

    @Input()
    data: IContentValue[];

    @Input()
    displayedColumns: Array<string>;

    public dataSource: TableDataSource<IContentValue>;
    public tableEntries: TableTypeEntries;
    constructor(){
        this.tableEntries = new TableTypeEntries();
    }

    ngOnInit(): void {
        this.dataSource = new TableDataSource(this.data);
    }

    public checkType(element:any) {
        return element.tableContentType;
    }
}
