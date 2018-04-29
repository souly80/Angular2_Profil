import { Injectable } from '@angular/core';
import {
    IContentValue, IPersonalData, IProfilData,
    TableContentType
} from "./profil-view.interface";
import {Observable} from "rxjs/Observable";

@Injectable()
export class ProfilViewService {

    public getPersonalData(): Observable<IPersonalData[]> {
        let data = new Array<IPersonalData>();
        var pd = {
            tdName: "Name",
            tdValue: "Soulaymane Zemmouri",
            tableContentType: TableContentType.PERSONAL_TABLE
        } as IPersonalData;
        data.push(pd);
        pd = {
            tdName: "Geburtsdatum",
            tdValue: "03.08.1980",
            tableContentType: TableContentType.PERSONAL_TABLE
        } as IPersonalData;
        data.push(pd);
        return Observable.create((observer: any)=> {
            observer.next(data);
            observer.complete();
        });
    }

    public getExperienceData(): Observable<IContentValue> {
        let data = [
            {
                key:"Programmiersprache",
                value:["C# 4.0", "C# 5.0", "LINQ", "Java 1.7", "CSS Bootstrap 3"],
                tableContentType: TableContentType.CONTENTVALUE_TABLE
            } as IContentValue,
            {
                key:"Kommunikationstechnologien",
                value:["HTPP/HTTPs", "AJAX", "Socket", "COM", "REST"],
                tableContentType: TableContentType.CONTENTVALUE_TABLE
            } as IContentValue,
            {
                key:"Deskriptionssprachen",
                value:["XML/Json", "XAML", "HTML 5"],
                tableContentType: TableContentType.CONTENTVALUE_TABLE
            } as IContentValue,
            {
                key:"WebTechnologien",
                value:["VAADIN", "JSP", "ASP", "GWT", "Javascript", "AngularJS", "Ajax"],
                tableContentType: TableContentType.CONTENTVALUE_TABLE
            } as IContentValue,
            {
                key:"Web Serever",
                value:["Tomcat", "IIS", "Apache", "Jetty"],
                tableContentType: TableContentType.CONTENTVALUE_TABLE
            } as IContentValue,
            {
                key:"Daten Bank",
                value:["Mysql", "Microsoft SQL", "DB2", "Oracle"],
                tableContentType: TableContentType.CONTENTVALUE_TABLE
            } as IContentValue,
            {
                key:"Entwicklungsumgebung",
                value:["Microsoft Visual Studio Enterprise 2015","Eclipse"],
                tableContentType: TableContentType.CONTENTVALUE_TABLE
            } as IContentValue,
            {
                key:"Architektur",
                value:["MVVM", "MPV", "MVC"],
                tableContentType: TableContentType.CONTENTVALUE_TABLE
            } as IContentValue,
            {
                key:"Methoden",
                value:["Objektorientiertes Design OOD, Programmierung OOP ",
                    "Build Management: Maven ,Continuous Integration: Jenkins ",
                    "Test Werkzeuge : JUnit",
                    "Nuint Code Analysen: SonarQube,Reshaper ",
                    "Configuration Management: Subversion, RTC (IBM)"],
                tableContentType: TableContentType.CONTENTVALUE_TABLE
            } as IContentValue,
            {
                key:"Prozesse",
                value:["Requirement Management: Doors ","Change Management RTC ( IBM) ClearQuest","Test Management : HP Quality Center"],
                tableContentType: TableContentType.CONTENTVALUE_TABLE
            } as IContentValue
        ];
        return Observable.create((observer: any) => {
           observer.next(data);
           observer.complete();
        });
    }

    public getTrainingsData(): Observable<IContentValue> {
        return Observable.create((observer: any) => {
            let data = [
                {
                    key: "25.04.2018-26.04.2018",
                    value: "Certified Git Specialist in Puchheim",
                    tableContentType: TableContentType.CONTENTVALUE_TABLE
                },
                {
                    key: "09.10.2017-11.10.2017",
                    value: "JavaScript Day 2017 in Berlin",
                    tableContentType: TableContentType.CONTENTVALUE_TABLE
                },
                {
                    key: "06.07.2017",
                    value: "Java Forum Stuttgart",
                    tableContentType: TableContentType.CONTENTVALUE_TABLE
                },
                {
                    key: "15.06.2016-17.06.2016",
                    value: "AngularJS und Javascript Intensiv-Workshop",
                    tableContentType: TableContentType.CONTENTVALUE_TABLE
                },
                {
                    key: "29.09.2014-30.09.2014",
                    value: "Agile methods in project managements Scrum Master (ohne Zertifikat Bosch Intern)",
                    tableContentType: TableContentType.CONTENTVALUE_TABLE
                },
                {
                    key: "04.07.2013",
                    value: "Java Forum Stuttgart ",
                    tableContentType: TableContentType.CONTENTVALUE_TABLE
                },
                {
                    key: "12.12.2011-15.12.2011",
                    value: "Windows Presentation Foundation C# .Net GUI",
                    tableContentType: TableContentType.CONTENTVALUE_TABLE
                },
                {
                    key: "26.09.2011-30.09.2011",
                    value: "BASTA Konferenz für Microsoft und Web Technologien Visual Studio 2010 WPF, Multicore Programmierung",
                    tableContentType: TableContentType.CONTENTVALUE_TABLE
                },
                {
                    key: "21.10.2009-22.10.2009",
                    value: "MVTec Kamerakalibrierung Klassifikation Filterung",
                    tableContentType: TableContentType.CONTENTVALUE_TABLE
                },
            ];
            observer.next(data);
            observer.complete();
        });
    }

    public getStudies(): Observable<IContentValue> {
        return Observable.create((observer: any) => {
            let data = [
                {
                    key: "2003-2008",
                    value: ["Elektrotechnik Fachrichtung Sensorsystemtechnik an der Hochschule Karlsruhe"],
                    tableContentType: TableContentType.CONTENTVALUE_TABLE
                } as IContentValue,
                {
                    key: "2001-2002",
                    value: ["DSH : Deutsch Sprachprüfung für den Hochschulzugang in Aachen"],
                    tableContentType: TableContentType.CONTENTVALUE_TABLE
                } as IContentValue,
                {
                    key: "1999–2001",
                    value: ["Physik Chemie Universität in Rabat (Marokko) Abschluss Vordiplom Endnote gut"],
                    tableContentType: TableContentType.CONTENTVALUE_TABLE
                } as IContentValue
            ];
            observer.next(data);
            observer.complete();
        });
    }

    public getInterships(): Observable<IContentValue> {
        return Observable.create((observer: any) => {
            let data = [
                {
                    key: "11/2007-03/2008",
                    value: ["Diplomarbeit bei Siemens in Karlsruhe Konzeption und Implementierung eine Bedienoberfläche mit Visual Studio C++ für die echtzeitfähige Bildverarbeitungsalgorithmen"],
                    tableContentType: TableContentType.CONTENTVALUE_TABLE
                } as IContentValue,
                {
                    key: "03/2007-05/2007",
                    value: ["Studienarbeit in Institut für Informationsverarbeitung Parser für die Kompilierung der Assembler Sprache einer Rekonfigurierbaren Hardware Compiler Aufbau: Werkzeug YACC und LEX"],
                    tableContentType: TableContentType.CONTENTVALUE_TABLE
                } as IContentValue,
                {
                    key: "08/2006-12/2006",
                    value: ["2. Praxissemester bei Fraunhofer-Institut Implementierung eines Personenerkennung Algorithmus für mobile Roboter C++,Bildverarbeitung"],
                    tableContentType: TableContentType.CONTENTVALUE_TABLE
                } as IContentValue,
                {
                    key: "03/2005-07/2005",
                    value: ["1. Praxissemester bei Thales Entwurf Softwarekomponenten Realisierung einer Oberfläche mit QT Digitale Modulation, C++ Programmierung"],
                    tableContentType: TableContentType.CONTENTVALUE_TABLE
                } as IContentValue,
            ];
            observer.next(data);
            observer.complete();
        });
    }

    public getEducation(): Observable<IContentValue> {
        return Observable.create((observer: any) => {
            let data = [
                {
                    key: "1999",
                    value: ["Abitur in Rabat (Marokko)"],
                    tableContentType: TableContentType.CONTENTVALUE_TABLE
                } as IContentValue
            ];
            observer.next(data);
            observer.complete();
        });
    }

    public getProfilData(): Observable<IProfilData[]> {
        return Observable.create((observer: any) => {
            let data = [

                {
                    key: "seit 04/2017",
                    "company": "CREALOGIX Group - The Leader for the Digital Bank in Stuttgart",
                    "art": "Senior Web Entwickler",
                    "realisation": `HTML5, Angular 2,Foundation/Bootstrap,CSS,Javascript/Typescript`,
                    "tasks": [
                        "Neuentwicklung des Content Management System (CMS) für die Online Banking auf Basis Frontend Technologie (Angular 4) in Kleinen Agile Teams",
                        "Entwicklung Komfortabler Benutzeroberfläche in Zusammenarbeit mit UX Spezialisten",
                        "Qualitätssicherung durch automatisierte Test (Jasmine,Karma Testrunner)",
                        "Pflege und Weiterentwicklung bestehender Client Side Portal Anwendung"
                    ],
                    tableContentType: TableContentType.PROFIL_TABLE
                } as IProfilData,
                {
                    key: "07/2015 - 03/2017",
                    "company": "Bosch GmbH FeP/TEF23 in Feuerbach-Stuttgart",
                    "art": "Softwarearchitekt und Softwareentwickler in der Fertigung",
                    "realisation": `HTML5, AngularJS/Angular 2,Bootstrap,CSS,Javascript/Typescript C#,REST WebAPI,Microservices, Entity Framework
                Oracle/MS SQL Server TFS , Node,NPM,Gulp,SystemJS,Nuget,Git,DevExpress Single Page Application,Microservices,Manufacturing
                Execution System,Industrie 4.0`,
                    "tasks": ["Neueentwicklung Andon Webanwendung als (Client-Server Application) um Betriebszustand einer Produktionslinie erkennbar anzuzeigen",
                        "Neuentwicklung der Condition Monitoring Software als moderne Webanwendung mit Alarmsystem um regelmässige Erfassung des Maschinenzustandes (SPA)",
                        "Weiterentwicklung des MES-Schnittstelle zu Maschinen und Produktionsdatenbank (Webbasierter Benutzeroberfläche Industrie 4.0)",
                        "Administration und Support Inhouse Windows Server (Win 2008,2012R2)",
                        "Entwicklung REST Schnittstelle Service für Energie Monitoring",
                        "Entwurf und Entwicklung einer Interaktive Dashboards für Industrie 4.0 mit Hilfe Microservices Technologie (Frontend:Typescript/Amcharts,Backend :WebApi C# .NET)"],
                    tableContentType: TableContentType.PROFIL_TABLE
                } as IProfilData,
                {
                    key: "10/2012 - 06/2015",
                    "company": "Bosch GmbH CC/ESM1 in Leonberg",
                    "art": "Produktsoftware Entwickler",
                    "realisation": `
                Java,Maven,Vaadin,C# .NET WPF,REST,WCF MS Visual Studio 2010,Eclipse
                `,
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
                        "Kozeption des Parallelbetriebs QC 10 und ALM 11.5 auf den Clients"],
                    tableContentType: TableContentType.PROFIL_TABLE
                } as IProfilData,
                {
                    key: "05/2008 - 08/2012",
                    "company": "Grotz-Beckert KG in Albstadt",
                    "art": "Softwareentwickler",
                    "realisation": `
                C#,.NET,Winforms,WPF,Halcon (Bildverarbeitung)
                Subversion, Redgate .Net Performance Profiler,Infragistics
                MS Visual Studio 2010
                `,
                    "tasks": ["Machbarkeitsuntersuchung von Bildverarbeitungssysteme",
                        "Entwicklung von Bildverarbeitungsalgorithmen",
                        "Entwurf, Implementierung und Test von Anwendungen (WPF, Winforms) und Applikationsarchitektur in C# .Net",
                        "Mitentwicklung einer Inhouse-Software-Bibliothek",
                        "Realisierung einer DLL für OPC (Siemens)",
                        "Inbetriebnahme, Betreuung bei Erprobung, Optimierung und Produktionseinführung"],
                    tableContentType: TableContentType.PROFIL_TABLE
                } as IProfilData,
            ];
            observer.next(data);
            observer.complete();
        });
    }

    public getLanguageKnowledge(): Observable<IContentValue> {
        let data = [
            {
                key: "Arabisch",
                value: ["Muttersprache"],
                tableContentType: TableContentType.CONTENTVALUE_TABLE
            } as IContentValue,
            {
                key: "Deutsch",
                value: ["Verhandlungssicher"],
                tableContentType: TableContentType.CONTENTVALUE_TABLE
            } as IContentValue,
            {
                key: "Englisch",
                value: ["Fließend"],
                tableContentType: TableContentType.CONTENTVALUE_TABLE
            } as IContentValue,
            {
                key: "Französisch",
                value: ["Fließend"],
                tableContentType: TableContentType.CONTENTVALUE_TABLE
            } as IContentValue
        ];
        return Observable.create((observer: any) => {
            observer.next(data);
            observer.complete();
        });
    }

    public getSocialSkills(): Observable<IContentValue> {
        let data = [
            {
                key: "",
                value: ["Engagement"],
                tableContentType: TableContentType.CONTENTVALUE_TABLE
            } as IContentValue,
            {
                key: "",
                value: ["Kritikfähigkeit"],
                tableContentType: TableContentType.CONTENTVALUE_TABLE
            } as IContentValue,
            {
                key: "",
                value: ["Teamfähigkeit"],
                tableContentType: TableContentType.CONTENTVALUE_TABLE
            } as IContentValue,
            {
                key: "",
                value: ["Zuverlässigkeit"],
                tableContentType: TableContentType.CONTENTVALUE_TABLE
            } as IContentValue
        ];
        return Observable.create((observer: any) => {
           observer.next(data);
           observer.complete();
        });
    }

    public getHobbies(): Observable<IContentValue> {
        let data = [
            {
                key: "",
                value: ["Programmieren"],
                tableContentType: TableContentType.CONTENTVALUE_TABLE
            } as IContentValue,
            {
                key: "",
                value: ["Astronomie"],
                tableContentType: TableContentType.CONTENTVALUE_TABLE
            } as IContentValue,
            {
                key: "",
                value: ["Schwimmen"],
                tableContentType: TableContentType.CONTENTVALUE_TABLE
            } as IContentValue
        ];
        return Observable.create((observer: any) => {
            observer.next(data);
            observer.complete();
        });
    }
}