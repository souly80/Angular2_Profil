import { Component, ViewChild, Inject, ElementRef } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

import { Observable } from 'rxjs/Rx';

import { MainViewService } from './main-view.service';
import {CommonUtils} from '../CommonUtils';
const image = require('../../../public/images/home.jpg');

@Component({
    selector: 'main-view',
    templateUrl: './main-view.component.html',
   styleUrls: ['./main-view.style.css'],
    providers: [MainViewService],
})
export class MainViewComponent {
    viewPath:string;
    public certificatesData:Array<Object>;
    mainImg = require('../../../public/images/home.jpg'); 
    videoPath = require('../../../public/images/video.mp4');   
    pdfImg = require('../../../public/images/pdf.png');
    @ViewChild('container')
    public container: ElementRef;
    mainContents: any;
    private skills: any;
    private skill: string;
    private pointer: number = 0;
    constructor( @Inject(DOCUMENT) private document: any, private mainService: MainViewService) {
        this.mainContents = this.mainService.getMainContents();
        this.certificatesData = this.mainService.getCertificatesData();
        this.skills = ["C#", "Java", "JavaScript", "Redux", "React", "Angular", "Typescript", "..."];
        Observable.interval(2000)
            .subscribe((x) => {
                if (this.pointer >= this.skills.length - 1)
                    this.pointer = 0;
                else
                    this.pointer++;
                this.skill = this.skills[this.pointer];
            });
    }

    public scrollToBottom() {
        CommonUtils.scrollToBottomWithAnimate(0);
    }
}