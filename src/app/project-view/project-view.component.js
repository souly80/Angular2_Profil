"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var project_view_service_1 = require("./project-view.service");
var CommonUtils_1 = require("../CommonUtils");
var Rx_1 = require("rxjs/Rx");
var ProjectViewComponent = (function () {
    function ProjectViewComponent(projectViewService) {
        var _this = this;
        this.projectViewService = projectViewService;
        this.pointer = 0;
        this.projectImg = require('../../../public/images/profil.jpg');
        this.videoPath = require('../../../public/images/video_project.mp4');
        this.projectsData = this.projectViewService.getProjects();
        this.skills = ["Industrie 4.0", "IoT", "Manufacturing Execution System", "Bildverarbeitingsysteme", "Application Lifecycle Management", "..."];
        Rx_1.Observable.interval(2000)
            .subscribe(function (x) {
            if (_this.pointer >= _this.skills.length - 1)
                _this.pointer = 0;
            else
                _this.pointer++;
            _this.skill = _this.skills[_this.pointer];
        });
    }
    ProjectViewComponent.prototype.scrollToBottom = function () {
        CommonUtils_1.CommonUtils.scrollToBottomWithAnimate(0);
    };
    return ProjectViewComponent;
}());
ProjectViewComponent = __decorate([
    core_1.Component({
        selector: 'project-view',
        templateUrl: './project-view.component.html',
        //styleUrls:["./project-view.css"],
        styles: ["\n    .even { background: #DC572E; }\n    .odd { background: #7f132d; }\n    "],
        providers: [project_view_service_1.ProjectViewService],
    }),
    __metadata("design:paramtypes", [project_view_service_1.ProjectViewService])
], ProjectViewComponent);
exports.ProjectViewComponent = ProjectViewComponent;
//# sourceMappingURL=project-view.component.js.map