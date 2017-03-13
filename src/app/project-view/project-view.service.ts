import { Injectable } from '@angular/core';

@Injectable()
export class ProjectViewService {
    getProjects() {
        return [
            {
                title: "Softwarearchitekt und Softwareentwickler in der Fertigung",
                company: "Bosch GmbH FeP/TEF23 in Feuerbach-Stuttgart",
                date: 'von 07.2018 bis 03.2017',
                contents:
                [
                    "Neueentwicklung Andon Webanwendung als (Client-Server Application) um Betriebszustand einer Produktionslinie erkennbar anzuzeigen",
                    "Neuentwicklung der Condition Monitoring Software als moderne Webanwendung mit Alarmsystem um regelmässige Erfassung des Maschinenzustandes (SPA)",
                    "Weiterentwicklung des MES-Schnittstelle zu Maschinen und Produktionsdatenbank (Webbasierter Benutzeroberfläche Industrie 4.0)",
                    "Administration und Support Inhouse Windows Server (Win 2008,2012R2)",
                    "Entwicklung REST Schnittstelle Service für Energie Monitoring ",
                    "Entwurf und Entwicklung einer Interaktive Dashboards für Industrie 4.0 mit Hilfe Microservices Technologie (Frontend:Typescript/Amcharts,Backend :WebApi C# .NET)",

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
                    "nbetriebnahme, Betreuung bei Erprobung, Optimierung und Produktionseinführung",                   

                ],
                keys: ["C#,.NET,Winforms,WPF,Halcon (Bildverarbeitung) Subversion, Redgate .Net Performance Profiler,Infragistics"]
            },
        ];
    }
}