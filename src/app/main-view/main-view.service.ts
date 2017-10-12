import { Injectable } from '@angular/core';

@Injectable()
export class MainViewService {
    public getCertificatesData(){
        return [
            {
                title:`Bosch GmbH`,
                path:"../../../public/files/bosch.pdf"
            },
            {
                title:`Grotz Beckert KG`,
                path:"../../../public/files/groz_beckert.pdf"
            },
            {
                title:`Diplom`,
                path:"../../../public/files/diplom.pdf"
            },
            {
                title:`Noten`,
                path:"../../../public/files/noten.pdf"
            },
            {
                title:`Siemens`,
                path:"../../../public/files/siemens.pdf"
            },
            {
                title:`Frauenhofer IPA`,
                path:"../../../public/files/frauenhofer.pdf"
            },
            {
                title:`Thales`,
                path:"../../../public/files/thales.pdf"
            },
        ];
    }

    getCompaniesStatements(){
        return [
            {
                statement:`Herr Herr Zemmouri war ein äußert engagierter Mitarbeiter, der seine Aufgaben jederzeit mit voller Einsatzbereitsschaft erolgreich erfüllte`,
                companyName:"Bosch GmbH Stuttgart"
            },
            {
                statement:`Zumdem war Herr Zemmouri ein sehr ehrgeiziger und engagierter Mitarbeiter, der stets einen überdurchschnittlichen EInsatz für unser Unternehmen zeigt`,
                companyName:"Grotz-Beckert"
            },
            {
                statement:`Er zeichnet sich durch eine hohe Motivation, Eigeninitiative, hohe AUffassungsgabe sowie ein Zielorientiertes und effektives Arbeiten aus`,
                companyName:"Siemens"
            },
            {
                statement:`Alle ihm zugeteilten Aufgaben hat Herr Zemmouri zu unserer vollsten Zufriedenheit erledigt .wir waren mit seinem Leistungen außerodentlich zufrieden`,
                companyName:"Fauenhofer IPA"
            },
            {
                statement:`Herr Zemmouri verfügt über gute fachliche Kenntnisse. Er beherrschte nach kurzer Zeit den Umgang mit den neuen Tools und Techniken.`,
                companyName:"Thales"
            }
        ];
    }

    getCompaniesInfos(){
        return [
            {imageURL: require('../../../public/images/crealogix.jpg')},
            {imageURL: require('../../../public/images/bosch.jpg')},
            {imageURL: require('../../../public/images/groz-beckert.gif')},
            {imageURL: require('../../../public/images/hs_karlsruhe.png')},
            {imageURL: require('../../../public/images/frauenhofer.png')},
            {imageURL: require('../../../public/images/siemens.png')},
            {imageURL: require('../../../public/images/thales.jpg')}
        ];
    }

    getMainContents() {
        return [
            {
                title: "current",
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