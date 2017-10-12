"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var ContactService = (function () {
    function ContactService() {
    }
    ContactService.prototype.getContactContents = function () {
        return [
            {
                title: "Aktuell",
                imageURL: '../../../public/images/actual.png',
                content: "\n                     Ich bin seit acht Jahren als Software Entwickler t\u00E4tig. Ich arbeite in Projekten als Software Architekt und entwerfe Architekturen\n            f\u00FCr moderne Webanwendungen. Mich interessieren Projekte basierend auf C#/Java,WebApi f\u00FCr die Backend Service,\n            und JavaScript/Typescript, HTML, AngularJS/Angular 2, Services und WCF. Ich bin mit dem TFS vertraut und verwalte\n            die Backlogs f\u00FCr einige Projekte.\n                "
            },
            {
                title: "Zukunft",
                imageURL: '../../../public/images/zukunft.png',
                content: "\n                    Prinzipiell bin ich an Projekten interessiert, die meine bestehenden Kenntnisse herausfordern und durch die ich neue F\u00E4higkeiten\n            erwerben kann. Besonders interessieren mich Projekten in denen ich als Software Architekt oder als Leiter des\n            Entwicklungsteams mitwirken kann. Zur Zeit bevorzuge ich freiberufliche Mitarbeit. Eine Festanstellung kommt\n            f\u00FCr mich nur bedingt in Betracht.\n                "
            },
            {
                title: "Vergangenheit",
                imageURL: '../../../public/images/vergangenheit.png',
                content: "\n                    Als geb\u00FCrtiger Wetzlarer (Hessen) ging ich 2002 nach Potsdam, um dort mein Studium zum Diplom Informatiker zu beginnen. Durch\n            die Wahl meiner Lehrveranstaltungen verf\u00FCge ich \u00FCber ein sehr gutes Wissen unter anderem in den Bereichen Betriebssysteme,\n            Datenbanksysteme, Netzwerktechnologien sowie in der Plattform Microsoft .NET und in den Sprachen C, C++, C#,\n            SQL, HTML und PHP. Zudem verf\u00FCge ich \u00FCber gute Englischkenntnisse. Durch mein im Mai 2000 gegr\u00FCndetes Gewerbe\n            und die in 2006 gegr\u00FCndete Firma f\u00FCr IT-, Ingenieur- und Immobiliendienstleistungen konnte ich bereits mein Wissen\n            in die Praxis umsetzen. In mehreren Kleinunternehmen war ich als Berater f\u00FCr IT Fragestellungen und zur \u00DCberwachung\n            und Qualit\u00E4tssicherung lokaler IT Infrastrukturen t\u00E4tig. Im Januar 2008 habe ich mein Studium erfolgreich abgeschlossen\n            und bin zur\u00FCck nach Wetzlar gezogen.\n                "
            }
        ];
    };
    return ContactService;
}());
ContactService = __decorate([
    core_1.Injectable()
], ContactService);
exports.ContactService = ContactService;
//# sourceMappingURL=contact.service.js.map