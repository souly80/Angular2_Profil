"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var Observable_1 = require("rxjs/Observable");
var ProfilViewService = (function () {
    function ProfilViewService() {
    }
    ProfilViewService.prototype.getTrainingData = function () {
        var trainingData = [
            {
                title: "JavaScript Day 2017",
                path: "../../../public/files/javascript_Day_2017.JPG"
            },
            {
                title: "AngularJS und Javascript Intensiv-Workshop",
                path: "../../../public/files/angularJS.pdf"
            },
            {
                title: "MVTec Halcon Bildverarbeitung",
                path: "../../../public/files/mvtec.pdf"
            },
            {
                title: "Basta .NET Konferenz",
                path: "../../../public/files/basta.pdf"
            },
            {
                title: "WPF .NET 4",
                path: "../../../public/files/ppedv.pdf"
            }
        ];
        return Observable_1.Observable.create(function (observer) {
            observer.next(trainingData);
            observer.complete();
        });
    };
    ProfilViewService.prototype.getPersonalData = function () {
        var data = new Array();
        var pd = {
            tdName: "Name",
            tdValue: "Soulaymane Zemmouri"
        };
        data.push(pd);
        pd = {
            tdName: "Geburtsdatum",
            tdValue: "03.08.1980"
        };
        data.push(pd);
        return Observable_1.Observable.create(function (observer) {
            observer.next(data);
            observer.complete();
        });
    };
    ProfilViewService.prototype.getExperienceData = function () {
        return [
            {
                "title": "Programmiersprache",
                "contents": ["C# 4.0", "C# 5.0", "LINQ", "Java 1.7", "CSS Bootstrap 3"]
            },
            {
                "title": "Kommunikationstechnologien",
                "contents": ["HTPP/HTTPs", "AJAX", "Socket", "COM", "REST"]
            },
            {
                "title": "Deskriptionssprachen",
                "contents": ["XML/Json", "XAML", "HTML 5"]
            },
            {
                "title": "WebTechnologien",
                "contents": ["VAADIN", "JSP", "ASP", "GWT", "Javascript", "AngularJS", "Ajax"]
            },
            {
                "title": "Web Serever",
                "contents": ["Tomcat", "IIS", "Apache", "Jetty"]
            },
            {
                "title": "Daten Bank",
                "contents": ["Mysql", "Microsoft SQL", "DB2", "Oracle"]
            },
            {
                "title": "Entwicklungsumgebung",
                "contents": ["Microsoft Visual Studio Enterprise 2015", "Eclipse"]
            },
            {
                "title": "Architektur",
                "contents": ["MVVM", "MPV", "MVC"]
            },
            {
                "title": "Methoden",
                "contents": ["Objektorientiertes Design OOD, Programmierung OOP ",
                    "Build Management: Maven ,Continuous Integration: Jenkins ",
                    "Test Werkzeuge : JUnit",
                    "Nuint Code Analysen: SonarQube,Reshaper ",
                    "Configuration Management: Subversion, RTC (IBM)"]
            },
            {
                "title": "Prozesse",
                "contents": ["Requirement Management: Doors ", "Change Management RTC ( IBM) ClearQuest", "Test Management : HP Quality Center"]
            },
            {
                "title": "Sprachen",
                "contents": ["Arabisch: Muttersprache", "Deutsch Verhandlungssicher", "Englisch Fließend", "Französisch Fließend"]
            },
            {
                "title": "Hobby",
                "contents": ["Familie", "Programmieren", "Astronomie", "Schwimmen"]
            },
        ];
    };
    ProfilViewService.prototype.getCvContents = function () {
        return [
            {
                "title": "Schulung",
                "trainingsList": [
                    {
                        "periode": "06.07.2017",
                        "training": "Java Forum Stuttgart"
                    },
                    {
                        "periode": "15.06.2016-17.06.2016",
                        "training": "AngularJS und Javascript Intensiv-Workshop"
                    },
                    {
                        "periode": "29.09.2014-30.09.2014",
                        "training": "Agile methods in project managements Scrum Master (ohne Zertifikat Bosch Intern)"
                    },
                    {
                        "periode": "04.07.2013",
                        "training": "Java Forum Stuttgart "
                    },
                    {
                        "periode": "12.12.2011-15.12.2011",
                        "training": "Windows Presentation Foundation C# .Net GUI"
                    },
                    {
                        "periode": "26.09.2011-30.09.2011",
                        "training": "BASTA Konferenz für Microsoft und Web Technologien Visual Studio 2010 WPF, Multicore Programmierung"
                    },
                    {
                        "periode": "21.10.2009-22.10.2009",
                        "training": "MVTec Kamerakalibrierung Klassifikation Filterung"
                    },
                ]
            },
            {
                "title": "Studium",
                "trainingsList": [
                    {
                        "periode": "2003-2008",
                        "training": "Elektrotechnik Fachrichtung Sensorsystemtechnik an der Hochschule Karlsruhe"
                    },
                    {
                        "periode": "2001-2002",
                        "training": "DSH : Deutsch Sprachprüfung für den Hochschulzugang in Aachen"
                    },
                    {
                        "periode": "1999–2001",
                        "training": "Physik Chemie Universität in Rabat (Marokko) Abschluss Vordiplom Endnote gut"
                    },
                ]
            },
            {
                "title": "Praktikum",
                "trainingsList": [
                    {
                        "periode": "11/2007-03/2008",
                        "training": "Diplomarbeit bei Siemens in Karlsruhe Konzeption und Implementierung eine Bedienoberfläche mit Visual Studio C++ für die echtzeitfähige Bildverarbeitungsalgorithmen"
                    },
                    {
                        "periode": "03/2007-05/2007",
                        "training": "Studienarbeit in Institut für Informationsverarbeitung Parser für die Kompilierung der Assembler Sprache einer Rekonfigurierbaren Hardware Compiler Aufbau: Werkzeug YACC und LEX"
                    },
                    {
                        "periode": "08/2006-12/2006",
                        "training": "2. Praxissemester bei Fraunhofer-Institut Implementierung eines Personenerkennung Algorithmus für mobile Roboter C++,Bildverarbeitung"
                    },
                    {
                        "periode": "03/2005-07/2005",
                        "training": "1. Praxissemester bei Thales Entwurf Softwarekomponenten Realisierung einer Oberfläche mit QT Digitale Modulation, C++ Programmierung"
                    },
                ]
            },
            {
                "title": "Schulbildung",
                "trainingsList": [
                    {
                        "periode": "1999",
                        "training": "Abitur in Rabat (Marokko)"
                    }
                ]
            },
        ];
    };
    ProfilViewService.prototype.getProjectList = function () {
        return [
            {
                "periode": "Seit 04/2017",
                "company": "CREALOGIX Group - The Leader for the Digital Bank in Stuttgart",
                "art": "Senior Web Entwickler",
                "realisation": "HTML5, Angular 2,Foundation/Bootstrap,CSS,Javascript/Typescript",
                "tasks": ["Analyse, Design, Implementierung Online-Banking Software"]
            },
            {
                "periode": "07/2015 - 03/2017",
                "company": "Bosch GmbH FeP/TEF23 in Feuerbach-Stuttgart",
                "art": "Softwarearchitekt und Softwareentwickler in der Fertigung",
                "realisation": "HTML5, AngularJS/Angular 2,Bootstrap,CSS,Javascript/Typescript C#,REST WebAPI,Microservices, Entity Framework\n                Oracle/MS SQL Server TFS , Node,NPM,Gulp,SystemJS,Nuget,Git,DevExpress Single Page Application,Microservices,Manufacturing\n                Execution System,Industrie 4.0",
                "tasks": ["Neueentwicklung Andon Webanwendung als (Client-Server Application) um Betriebszustand einer Produktionslinie erkennbar anzuzeigen",
                    "Neuentwicklung der Condition Monitoring Software als moderne Webanwendung mit Alarmsystem um regelmässige Erfassung des Maschinenzustandes (SPA)",
                    "Weiterentwicklung des MES-Schnittstelle zu Maschinen und Produktionsdatenbank (Webbasierter Benutzeroberfläche Industrie 4.0)",
                    "Administration und Support Inhouse Windows Server (Win 2008,2012R2)",
                    "Entwicklung REST Schnittstelle Service für Energie Monitoring",
                    "Entwurf und Entwicklung einer Interaktive Dashboards für Industrie 4.0 mit Hilfe Microservices Technologie (Frontend:Typescript/Amcharts,Backend :WebApi C# .NET)"]
            },
            {
                "periode": "10/2012 bis 06/2015",
                "company": "Bosch GmbH CC/ESM1 in Leonberg",
                "art": "Produktsoftware Entwickler",
                "realisation": "\n                Java,Maven,Vaadin,C# .NET WPF,REST,WCF MS Visual Studio 2010,Eclipse\n                ",
                "tasks": ["Implementierung Serverseitige Webanwendung mit Vaadin Framework (Java MVP CSS)",
                    "Erweiterung neuer Features in Eclipse Plugins",
                    "Entwicklung einer Middle Komponente, die als ein WCF Webservice realisiert wurde (.Net c# 4.0)",
                    "Erstellung eigenes Tools (WPF C# .Net MVVM) für die HP Quality Center Plattform",
                    "Implementierung eines Tools (Java) zur Überwachung ein Lizenzserver",
                    "Erstellung eines Skriptes zum importieren ein Excel Datei in ClearQuest (REST Interface)",
                    "Technische Betreuung der Einführung des Application Lifecycle Management Systems",
                    "Durchführung Anforderungsworkshops mit CC/DA und CC/AS Standorten",
                    "Windows terminal Server Betreuung (Win 2003,2008,2012)",
                    "Entwurf eines Migrationskonzept aus HP Quality Center 10.0 nach Application Lifecycle Management 11.5",
                    "Kozeption des Parallelbetriebs QC 10 und ALM 11.5 auf den Clients"]
            },
            {
                "periode": "05/2008 bis 08/20012",
                "company": "Grotz-Beckert KG in Albstadt",
                "art": "Softwareentwickler",
                "realisation": "\n                C#,.NET,Winforms,WPF,Halcon (Bildverarbeitung)\n                Subversion, Redgate .Net Performance Profiler,Infragistics\n                MS Visual Studio 2010\n                ",
                "tasks": ["Machbarkeitsuntersuchung von Bildverarbeitungssysteme",
                    "Entwicklung von Bildverarbeitungsalgorithmen",
                    "Entwurf, Implementierung und Test von Anwendungen (WPF, Winforms) und Applikationsarchitektur in C# .Net",
                    "Mitentwicklung einer Inhouse-Software-Bibliothek",
                    "Realisierung einer DLL für OPC (Siemens)",
                    "Inbetriebnahme, Betreuung bei Erprobung, Optimierung und Produktionseinführung"]
            },
        ];
    };
    return ProfilViewService;
}());
ProfilViewService = __decorate([
    core_1.Injectable()
], ProfilViewService);
exports.ProfilViewService = ProfilViewService;
//# sourceMappingURL=profil-view.service.js.map