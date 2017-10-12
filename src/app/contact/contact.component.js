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
var Rx_1 = require("rxjs/Rx");
var contact_service_1 = require("./contact.service");
var CommonUtils_1 = require("../CommonUtils");
var ContactComponent = (function () {
    function ContactComponent(contactService) {
        var _this = this;
        this.contactService = contactService;
        this.contactImg = require('../../../public/images/me.jpg');
        this.pointer = 0;
        this.contactContents = this.contactService.getContactContents();
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
    ContactComponent.prototype.scrollToBottom = function () {
        CommonUtils_1.CommonUtils.scrollToBottomWithAnimate(0);
    };
    return ContactComponent;
}());
ContactComponent = __decorate([
    core_1.Component({
        selector: 'contact-view',
        templateUrl: './contact.component.html',
        providers: [contact_service_1.ContactService],
    }),
    __metadata("design:paramtypes", [contact_service_1.ContactService])
], ContactComponent);
exports.ContactComponent = ContactComponent;
//# sourceMappingURL=contact.component.js.map