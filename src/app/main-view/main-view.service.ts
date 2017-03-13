import { Injectable } from '@angular/core';

@Injectable()
export class MainViewService {
    getMainContents() {
        return [
            {
                title: "actual",
                imageURL: require('../../../public/images/actual.png'),
                content: `
                Meine Mission, Probleme zu verstehen und dann eine technische Lösung in Form von Software umzusetzen.
                Ich bin seit 2008 als Software Entwickler tätig. Ich arbeite in Projekten als Softwarearchitekt und entwerfe Architekturen
            für moderne Webanwendungen.
            Ich habe mich auf die Programmierung von C#/Java Backend Service für agile Softwareentwicklung nach Scrum spezialisiert 
            und habe bereits eine Reihe von Projekten erfolgreich umgesetzt.
            Als weitere Tätigkeitsschwerpunkte sind die Webbasierten Fronend Anwendungen Javascript/Typescript und Angular 2 zu nennen.
            Ich bin mit dem TFS vertraut und verwalte
            die Backlogs für einige Projekte.
                `
            },
            {
                title: "future",
                imageURL: require('../../../public/images/zukunft.png'),
                content: `
                Durch die diversen Aufgaben, die ich während einiger Projekte bereits erfolgreich bearbeitete, 
                habe ich einen breiten Einblick in das Softwarearchitektur und unterschiedliche Lösungsansätze kennen gelernt. 
                Als freier Softwareentwickler bin ich stets auf der Suche nach interessanten und herausfordernden neuen Projekten.               
                Zur Zeit bevorzuge ich freiberufliche Mitarbeit. Eine Festanstellung kommt
                für mich nur bedingt in Betracht.
                `
            },
            {
                title: "past",
                imageURL: require('../../../public/images/vergangenheit.png'),
                content: `
                Aus meinem Lebenslauf Können Sie ersehen, dass ich darüber hinaus Erfahrung in Bildverarbeitungssystemen für Produktionsanlagen.
                Meine bisherigen Tätigkeiten waren die technische Betreuung der Einführung des ALM (Application Lifecycle Management) Systems 
                , Entwurf, Implementierung und Test von Tools/scripts mit Einsatz von Eclipse Java und Vaadin (Web Framework). 
                Weiterentwicklung des MES (Manufacturing Execution System) Schnittstelle zu Maschinen und Produktionsdatenbank (Industrie 4.0)                   
                `
            }
        ];
    }
}