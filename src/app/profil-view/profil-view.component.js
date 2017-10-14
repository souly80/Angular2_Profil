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
var CommonUtils_1 = require("../CommonUtils");
var profil_view_service_1 = require("./profil-view.service");
var Rx_1 = require("rxjs/Rx");
var router_1 = require("@angular/router");
var ProfilViewComponent = (function () {
    function ProfilViewComponent(activatedRoute, provilViewService) {
        var _this = this;
        this.activatedRoute = activatedRoute;
        this.provilViewService = provilViewService;
        this.pointer = 0;
        this.meImg = require('../../../public/images/meProfil.png');
        this.pdfImg = require('../../../public/images/pdf.png');
        this.profilImg = require('../../../public/images/project.jpg');
        this.projectList = this.provilViewService.getProjectList();
        this.cvContents = this.provilViewService.getCvContents();
        this.experinceData = this.provilViewService.getExperienceData();
        this.skills = ["Microservices", "MVVM , MVP & MVC", "Single Page Application", "REST", "WEB API", "Webpack", "NodeJS NPM", "Team Foudation Server", "Git", "Entity Framework 6x", "MS SQL Server", "Oracle 12c", "..."];
        Rx_1.Observable.interval(2000)
            .subscribe(function (x) {
            if (_this.pointer >= _this.skills.length - 1)
                _this.pointer = 0;
            else
                _this.pointer++;
            _this.skill = _this.skills[_this.pointer];
        });
    }
    ProfilViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.data.pluck('profilData')
            .subscribe(function (data) {
            _this.trainingsData = data[0];
            data.personalData = data[1];
        });
    };
    ProfilViewComponent.prototype.scrollToBottom = function () {
        CommonUtils_1.CommonUtils.scrollToBottomWithAnimate(0);
    };
    return ProfilViewComponent;
}());
ProfilViewComponent = __decorate([
    core_1.Component({
        selector: 'profil-view',
        templateUrl: './profil-view.component.html',
        providers: [profil_view_service_1.ProfilViewService],
        styleUrls: ['profil.style.css']
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute, profil_view_service_1.ProfilViewService])
], ProfilViewComponent);
exports.ProfilViewComponent = ProfilViewComponent;
//# sourceMappingURL=profil-view.component.js.map