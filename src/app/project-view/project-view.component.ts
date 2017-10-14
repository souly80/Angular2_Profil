import { Component } from '@angular/core';
import { ProjectViewService } from './project-view.service';
import { CommonUtils } from '../CommonUtils';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'project-view',
  templateUrl: './project-view.component.html',
  styleUrls:["./project-view.css"],
  providers: [ProjectViewService],
})
export class ProjectViewComponent {
  private skills: any;
  private skill: string;
  private pointer: number = 0;

  projectImg = require('../../../public/images/profil.jpg');
  videoPath = require('../../../public/images/video_project.mp4');   
  projectsData: any;
  constructor(private projectViewService: ProjectViewService) {
    this.projectsData = this.projectViewService.getProjects();
    this.skills = ["Industrie 4.0", "IoT", "Manufacturing Execution System", "Bildverarbeitingsysteme", "Application Lifecycle Management", "..."];
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