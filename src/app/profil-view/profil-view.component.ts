import { Component } from '@angular/core';
import { CommonUtils } from '../CommonUtils';
import { ProfilViewService } from './profil-view.service';
import { PersonalData } from './PersonalData';
import { Observable } from 'rxjs/Rx';

@Component({
    selector: 'profil-view',
    templateUrl: './profil-view.component.html',
    providers: [ProfilViewService],
    styleUrls: ['profil.style.css']

})
export class ProfilViewComponent {
    private skills: any;
    public trainingsData:Array<Object>;
    private skill: string;
    private pointer: number = 0;
    meImg = require('../../../public/images/meProfil.png');
    pdfImg = require('../../../public/images/pdf.png');
    profilImg = require('../../../public/images/project.jpg');
    projectList: any;
    cvContents: any;
    experinceData: any;
    personalData: Array<PersonalData>;
    constructor(private provilViewService: ProfilViewService) {

        this.trainingsData = this.provilViewService.getTrainingData();
        this.personalData = this.provilViewService.getPersonalData();
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

    public scrollToBottom() {
        CommonUtils.scrollToBottomWithAnimate(0);
    }

}