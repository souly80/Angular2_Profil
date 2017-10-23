import {Component, OnInit} from '@angular/core';
import { ProfilViewService } from './profil-view.service';
import { Observable } from 'rxjs/Rx';
import {IContentValue, IPersonalData, IProfilData} from "./profil-view.interface";
import {ActivatedRoute} from "@angular/router";

@Component({
    selector: 'profil-view',
    templateUrl: './profil-view.component.html',
    providers: [ProfilViewService],
    styleUrls: ['profil.style.css']

})
export class ProfilViewComponent implements OnInit{
    public displayedColumns:Array<string>;
    private skills: any;
    public trainingsData:Array<IContentValue>;
    public studiesData: any;
    public educationData: any;
    public  intershipsData: any;
    private skill: string;
    private pointer: number = 0;
    meImg = require('../../../public/images/me.jpg');
    pdfImg = require('../../../public/images/pdf.png');
    profilImg = require('../../../public/images/project.jpg');
    profilData: IProfilData[];
    experinceData: IContentValue[];
    socialSkillsData: IContentValue[];
    hobiesData: IContentValue[];
    languageKnowledgeData: IContentValue[];
    personalData: Array<IPersonalData>;

    constructor(private activatedRoute: ActivatedRoute) {
        this.displayedColumns = ['Zeitraum', 'Arbeitsgeber', /*'Bezeichnung', 'Realisation'*/];
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
                this.personalData = data[1];
                this.profilData = data[2];
                this.studiesData = data[3];
                this.educationData = data[4];
                this.intershipsData = data[5];
                this.experinceData = data[6];
                this.languageKnowledgeData = data[7];
                this.socialSkillsData = data[8];
                this.hobiesData = data[9];
            });
    }
}