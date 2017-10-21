import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {IDownloadData} from "./download-list.interface";

@Component({
    selector: 'download-list',
    templateUrl: './download-list.component.html',
    styleUrls: ['./download-list.style.css']
})
export class DownloadListComponent implements  OnInit {
    public downloadData: Map<string,IDownloadData[]>;

    constructor(private activatedRoute: ActivatedRoute) {
    }

    ngOnInit(): void {
        this.downloadData = new Map();
        this.activatedRoute.data.pluck('downloadListData').subscribe((data: any)=> {
            this.downloadData.set("Lebenslauf", data[0]);
            this.downloadData.set("Studium", data[1]);
            this.downloadData.set("Schulung", data[2]);
            this.downloadData.set("Zeugnisse", data[3]);
            this.downloadData.set("Sonstiges", data[4]);
        });
    }
}