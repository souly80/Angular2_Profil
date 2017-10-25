import {Component} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
    selector: 'download-list',
    templateUrl: './download-list.component.html',
    styleUrls: ['./download-list.style.css']
})
export class DownloadListComponent {
    public downloadData: any[];
    projectIcon: string = require('../../../public/assets/project_icon_24.png');
    projectIconMobile: string = require('../../../public/assets/project_icon_16.png');

    constructor(private activatedRoute: ActivatedRoute) {
        let that = this;
        that.downloadData = [];
        this.activatedRoute.data.pluck('downloadListData').subscribe((data: any)=> {
            let obj = {key: "Lebenslauf",value: data[0]};
            that.downloadData.push(obj);
            obj = {key: "Schulung",value: data[1]};
            that.downloadData.push(obj);
            obj = {key: "Zeugnisse",value: data[2]};
            that.downloadData.push(obj);
            obj = {key: "Studium",value: data[3]};
            that.downloadData.push(obj);
            obj = {key: "Sonstiges",value: data[4]};
            that.downloadData.push(obj);
        });
    }
}