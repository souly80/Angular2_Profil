import { Component } from '@angular/core';
import { ProjectViewService } from './project-view.service';
import { Observable } from 'rxjs/Rx';
import {IProjectData} from "./project-view.interface";

@Component({
  selector: 'project-view',
  templateUrl: './project-view.component.html',
  styleUrls:["./project-view.css"],
  providers: [ProjectViewService],
})
export class ProjectViewComponent {
  public isExpaned: boolean;
  private skills: any;
  private skill: string;
  private pointer: number = 0;
  right_chevron: string = require('../../../public/assets/right-chevron.png');
  projectImg: string = require('../../../public/images/profil.jpg');
  videoPath = require('../../../public/images/video_project.mp4');
  projectIcon: string = require('../../../public/assets/project_icon_24.png');
  projectIconMobile: string = require('../../../public/assets/project_icon_16.png');
  projectsData: IProjectData[];
  isExpanedArray: boolean[];
  constructor(private projectViewService: ProjectViewService) {
    this.projectsData = this.projectViewService.getProjectData();
    this.isExpanedArray = [];
    for(let i =0; i< this.projectsData.length - 1; i++) {
      this.isExpanedArray[i] = false;
    }
    this.skills = ["Industrie 4.0", "IoT", "Manufacturing Execution System", "Bildverarbeitungsysteme", "Application Lifecycle Management", "..."];
    Observable.interval(2000)
      .subscribe((x) => {
        if (this.pointer >= this.skills.length - 1)
          this.pointer = 0;
        else
          this.pointer++;
        this.skill = this.skills[this.pointer];
      });
  }

  public onExpaned(value: boolean,index: number) {
    this.isExpanedArray[index] = value;
  }
} 