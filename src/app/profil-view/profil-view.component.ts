import {Component, OnInit} from '@angular/core';
import { CommonUtils } from '../CommonUtils';
import { ProfilViewService } from './profil-view.service';
import { Observable } from 'rxjs/Rx';
import {IPersonalData, ITrainingData} from "./profil-view.interface";
import {ActivatedRoute} from "@angular/router";

@Component({
    selector: 'profil-view',
    templateUrl: './profil-view.component.html',
    providers: [ProfilViewService],
    styleUrls: ['profil.style.css']

})
export class ProfilViewComponent implements OnInit{

    private skills: any;
    public trainingsData:Array<ITrainingData>;
    private skill: string;
    private pointer: number = 0;
    meImg = require('../../../public/images/meProfil.png');
    pdfImg = require('../../../public/images/pdf.png');
    profilImg = require('../../../public/images/project.jpg');
    projectList: any;
    cvContents: any;
    experinceData: any;
    personalData: Array<IPersonalData>;
    constructor(private activatedRoute: ActivatedRoute, private provilViewService: ProfilViewService) {
        this.projectList = this.provilViewService.getProjectList();
        this.cvContents = this.provilViewService.getCvContents();
        this.experinceData = this.provilViewService.getExperienceData();
        this.skills = ["Microservices", "MVVM , MVP & MVC","Single Page Application","REST", "WEB API", "Webpack","NodeJS NPM","Team Foudation Server","Git","Entity Framework 6x", "MS SQL Server","Oracle 12c","..."];
        Observable.interval(2000)
            .subscribe((x) => {
                if (this.pointer >= this.skills.length - 1)
                    this.pointer = 0;
                else
                    this.pointer++;
                this.skill = this.skills[this.pointer];
            });
    }

    ngOnInit(): void {
        this.activatedRoute.data.pluck('profilData')
            .subscribe(( data: any) => {
                this.trainingsData = data[0];
                data.personalData = data[1];
            });
    }

    public scrollToBottom() {
        CommonUtils.scrollToBottomWithAnimate(0);
    }

}