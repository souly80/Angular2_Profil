"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var MainViewService = (function () {
    function MainViewService() {
    }
    MainViewService.prototype.getCertificatesData = function () {
        return [
            {
                title: "Bosch GmbH",
                path: "../../../public/files/bosch.pdf"
            },
            {
                title: "Grotz Beckert KG",
                path: "../../../public/files/groz_beckert.pdf"
            },
            {
                title: "Diplom",
                path: "../../../public/files/diplom.pdf"
            },
            {
                title: "Noten",
                path: "../../../public/files/noten.pdf"
            },
            {
                title: "Siemens",
                path: "../../../public/files/siemens.pdf"
            },
            {
                title: "Frauenhofer IPA",
                path: "../../../public/files/frauenhofer.pdf"
            },
            {
                title: "Thales",
                path: "../../../public/files/thales.pdf"
            },
        ];
    };
    MainViewService.prototype.getMainContents = function () {
        return [
            {
                title: "current",
                imageURL: require('../../../public/images/actual.png'),
                content: "\n                Meine Mission, Probleme zu verstehen und dann eine technische L\u00F6sung in Form von Software umzusetzen.\n                Ich bin seit 2008 als Software Entwickler t\u00E4tig. Ich arbeite in Projekten als Softwarearchitekt und entwerfe Architekturen\n            f\u00FCr moderne Webanwendungen.\n            Ich habe mich auf die Programmierung von C#/Java Backend Service f\u00FCr agile Softwareentwicklung nach Scrum spezialisiert \n            und habe bereits eine Reihe von Projekten erfolgreich umgesetzt.\n            Als weitere T\u00E4tigkeitsschwerpunkte sind die Webbasierten Fronend Anwendungen Javascript/Typescript und Angular 2 zu nennen.\n            Ich bin mit dem TFS vertraut und verwalte\n            die Backlogs f\u00FCr einige Projekte.\n                "
            },
            {
                title: "future",
                imageURL: require('../../../public/images/zukunft.png'),
                content: "\n                Durch die diversen Aufgaben, die ich w\u00E4hrend einiger Projekte bereits erfolgreich bearbeitete, \n                habe ich einen breiten Einblick in das Softwarearchitektur und unterschiedliche L\u00F6sungsans\u00E4tze kennen gelernt. \n                Als freier Softwareentwickler bin ich stets auf der Suche nach interessanten und herausfordernden neuen Projekten.               \n                Zur Zeit bevorzuge ich freiberufliche Mitarbeit. Eine Festanstellung kommt\n                f\u00FCr mich nur bedingt in Betracht.\n                "
            },
            {
                title: "past",
                imageURL: require('../../../public/images/vergangenheit.png'),
                content: "\n                Aus meinem Lebenslauf K\u00F6nnen Sie ersehen, dass ich dar\u00FCber hinaus Erfahrung in Bildverarbeitungssystemen f\u00FCr Produktionsanlagen.\n                Meine bisherigen T\u00E4tigkeiten waren die technische Betreuung der Einf\u00FChrung des ALM (Application Lifecycle Management) Systems \n                , Entwurf, Implementierung und Test von Tools/scripts mit Einsatz von Eclipse Java und Vaadin (Web Framework). \n                Weiterentwicklung des MES (Manufacturing Execution System) Schnittstelle zu Maschinen und Produktionsdatenbank (Industrie 4.0)                   \n                "
            }
        ];
    };
    return MainViewService;
}());
MainViewService = __decorate([
    core_1.Injectable()
], MainViewService);
exports.MainViewService = MainViewService;
//# sourceMappingURL=main-view.service.js.map