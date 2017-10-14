import { Injectable } from '@angular/core';

@Injectable()
export class ProjectViewService {
    getProjects() {
        return [
            {
                title: "Senior Webentwickler im Bereich R&D",
                company: "CREALOGIX Group the Leader for Digital Bank Stuttgart",
                date: 'von 04.2017 bis 09.2017',
                contents:
                    [
                        "Neuentwicklung des Content Management System (CMS) für die Online Banking auf Basis Frontend Technologie (Angular 4) in Kleinen Agile Teams.",
                        "Entwicklung Komfortabler Benutzeroberfläche in Zusammenarbeit mit UX Spezialisten.",
                        "Qualitätssicherung durch automatisierte Test (Jasmine,Karma Testrunner).",
                        "Pflege und Weiterentwicklung bestehender Client Side Portal Anwendung."
                    ],
                keys: ["Angular 4, HTML5, Typescript/Javascript, jQuery, Json, Test-Driven Development,Scrum"]
            },
            {
                title: "Softwarearchitekt und Softwareentwickler in der Fertigung",
                company: "Bosch GmbH FeP/TEF23 in Feuerbach-Stuttgart",
                date: 'von 07.2015 bis 03.2017',
                contents:
                [
                    "Entwicklung und Betrieb von Anzeigesystemen zur Visualisierung von Betriebszuständen und Performance-Daten im internationalen Fertigungsverbund der CP4-Produktion.",
                    "Implementierung von Schnittstellen zu Manufacturing-Execution-Systemen (MES) Bereitstellung von Produktionsdaten über Webschnittstellen (REST)",                    
                    "Administration und Support Inhouse Windows Server (Win 2008,2012R2)",
                    "Vernetzung von Produktionsdaten über Micro Services im Rahmen der Industrie 4.0 Aktivitäten im Werk Feuerbach Die Umsetzung in den Projekten erfolgte unter Einsatz folgender Technologien:",
                    "- Frontend: Typescript / Javascript, HTML5, CSS, AngularJS/Angular2",
                    "- Backend: C# ASP.NET WEBAPI, Datenbanken Oracle12c und MS SQL",

                ],
                keys: ["AngularJS/Angular2,Typescript,C# ASP.NET WEBAPI,Oracle/MS SQL, Microservices,Industrie 4.0,MES"]
            },
            {
                title: "Produktsoftware Entwickler",
                company: "Bosch GmbH CC/ESM1 in Leonberg",
                date: 'von 10.2012 bis 06.2015',
                contents:
                [
                    "Implementierung Serverseitige Webanwendung mit Vaadin Framework (Java MVP CSS)",
                    "Erweiterung neuer Features in Eclipse Plugins",
                    "Entwicklung einer Middle Komponente, die als ein WCF Webservice realisiert wurde (.Net c# 4.0).",
                    "Erstellung eigenes Tools (WPF C# .Net MVVM) für die HP Quality Center Plattform",
                    "Implementierung eines Tools (Java) zur Überwachung ein Lizenzserver",
                    "Erstellung eines Skriptes zum importieren ein Excel Datei in ClearQuest (REST Interface)",
                    "Technische Betreuung der Einführung des Application Lifecycle Management Systems ",
                    "Durchführung Anforderungsworkshops mit CC/DA und CC/AS Standorten",
                    "Windows terminal Server Betreuung (Win 2003,2008,2012)",
                    "Entwurf eines Migrationskonzept aus HP Quality Center 10.0 nach Application Lifecycle Management 11.5",
                    "Kozeption des Parallelbetriebs QC 10 und ALM 11.5 auf den Clients"

                ],
                keys: ["Java,Maven,Vaadin,C# .NET WPF,REST,WCF,MS Visual Studio 2010,Eclipse"]
            },
            {
                title: "Softwareentwickler",
                company: "Grotz-Beckert KG in Albstadt",
                date: 'von 05.2008 bis 10.2012',
                contents:
                [
                    "Machbarkeitsuntersuchung von Bildverarbeitungssysteme",
                    "Entwicklung von Bildverarbeitungsalgorithmen ",
                    "Entwurf, Implementierung und Test von Anwendungen (WPF, Winforms) und Applikationsarchitektur in C# .Net",
                    "Mitentwicklung einer Inhouse-Software-Bibliothek",
                    "Realisierung einer DLL für OPC (Siemens)",
                    "Inbetriebnahme, Betreuung bei Erprobung, Optimierung und Produktionseinführung",                   

                ],
                keys: ["C#,.NET,Winforms,WPF,Halcon (Bildverarbeitung) Subversion, Redgate .Net Performance Profiler,Infragistics"]
            },
        ];
    }
}