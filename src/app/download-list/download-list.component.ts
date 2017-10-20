import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ITrainingDonwloadData} from "./download-list.interface";

@Component({
    selector: 'download-list',
    templateUrl: './download-list.component.html',
    styleUrls: ['./download-list.style.css']
})
export class DownloadListComponent implements  OnInit {
    public downloadListData: ITrainingDonwloadData[];

    constructor(private activatedRoute: ActivatedRoute) {
    }

    ngOnInit(): void {
        this.activatedRoute.data.pluck('downloadListData').subscribe((data: any)=> {
            this.downloadListData = data;
        });
    }
}