import { Component, ViewChild, Inject, ElementRef } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

import { Observable } from 'rxjs/Rx';

import { MainViewService } from './main-view.service';
import { PageScrollService, PageScrollInstance } from 'ng2-page-scroll';
import {CommonUtils} from '../CommonUtils';
const image = require('../../../public/images/home.jpg');

@Component({
    selector: 'main-view',
    templateUrl: './main-view.component.html',
    providers: [MainViewService],
})
export class MainViewComponent {
    mainImg = require('../../../public/images/home.jpg');
    @ViewChild('container')
    public container: ElementRef;
    mainContents: any;
    private skills: any;
    private skill: string;
    private pointer: number = 0;
    constructor( @Inject(DOCUMENT) private document: any, private mainService: MainViewService, private pageScrollService: PageScrollService) {
        this.mainContents = this.mainService.getMainContents();
        this.skills = ["C#", "Java", "JavaScript", "CSS", "AngularJS", "Angular 2", "Typescript", "..."];
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