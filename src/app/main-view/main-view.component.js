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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var Rx_1 = require("rxjs/Rx");
var main_view_service_1 = require("./main-view.service");
var CommonUtils_1 = require("../CommonUtils");
var image = require('../../../public/images/home.jpg');
var MainViewComponent = (function () {
    function MainViewComponent(document, mainService) {
        var _this = this;
        this.document = document;
        this.mainService = mainService;
        this.mainImg = require('../../../public/images/home.jpg');
        this.videoPath = require('../../../public/images/video.mp4');
        this.pdfImg = require('../../../public/images/pdf.png');
        this.pointer = 0;
        this.mainContents = this.mainService.getMainContents();
        this.certificatesData = this.mainService.getCertificatesData();
        this.skills = ["C#", "Java", "JavaScript", "CSS", "AngularJS", "Angular 2", "Typescript", "..."];
        Rx_1.Observable.interval(2000)
            .subscribe(function (x) {
            if (_this.pointer >= _this.skills.length - 1)
                _this.pointer = 0;
            else
                _this.pointer++;
            _this.skill = _this.skills[_this.pointer];
        });
    }
    MainViewComponent.prototype.scrollToBottom = function () {
        CommonUtils_1.CommonUtils.scrollToBottomWithAnimate(0);
    };
    return MainViewComponent;
}());
__decorate([
    core_1.ViewChild('container'),
    __metadata("design:type", core_1.ElementRef)
], MainViewComponent.prototype, "container", void 0);
MainViewComponent = __decorate([
    core_1.Component({
        selector: 'main-view',
        templateUrl: './main-view.component.html',
        styles: ["\n    .even { background: #F9FBFD; }\n    .odd { background: #F9FBFF; }\n    "],
        providers: [main_view_service_1.MainViewService],
    }),
    __param(0, core_1.Inject(platform_browser_1.DOCUMENT)),
    __metadata("design:paramtypes", [Object, main_view_service_1.MainViewService])
], MainViewComponent);
exports.MainViewComponent = MainViewComponent;
//# sourceMappingURL=main-view.component.js.map