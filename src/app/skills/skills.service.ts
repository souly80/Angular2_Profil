import { Injectable } from '@angular/core';

@Injectable()
export class SkillsService {
    getSkillsContents() {
        return [
            {
                title: "Aktuell",
                imageURL: '../../../public/images/actual.png',
                content: `
                     Ich bin seit acht Jahren als Software Entwickler tätig. Ich arbeite in Projekten als Software Architekt und entwerfe Architekturen
            für moderne Webanwendungen. Mich interessieren Projekte basierend auf C#/Java,WebApi für die Backend Service,
            und JavaScript/Typescript, HTML, AngularJS/Angular 2, Services und WCF. Ich bin mit dem TFS vertraut und verwalte
            die Backlogs für einige Projekte.
                `
            },
            {
                title: "Zukunft",
                imageURL: '../../../public/images/zukunft.png',
                content: `
                    Prinzipiell bin ich an Projekten interessiert, die meine bestehenden Kenntnisse herausfordern und durch die ich neue Fähigkeiten
            erwerben kann. Besonders interessieren mich Projekten in denen ich als Software Architekt oder als Leiter des
            Entwicklungsteams mitwirken kann. Zur Zeit bevorzuge ich freiberufliche Mitarbeit. Eine Festanstellung kommt
            für mich nur bedingt in Betracht.
                `
            },
            {
                title: "Vergangenheit",
                imageURL: '../../../public/images/vergangenheit.png',
                content: `
                    Als gebürtiger Wetzlarer (Hessen) ging ich 2002 nach Potsdam, um dort mein Studium zum Diplom Informatiker zu beginnen. Durch
            die Wahl meiner Lehrveranstaltungen verfüge ich über ein sehr gutes Wissen unter anderem in den Bereichen Betriebssysteme,
            Datenbanksysteme, Netzwerktechnologien sowie in der Plattform Microsoft .NET und in den Sprachen C, C++, C#,
            SQL, HTML und PHP. Zudem verfüge ich über gute Englischkenntnisse. Durch mein im Mai 2000 gegründetes Gewerbe
            und die in 2006 gegründete Firma für IT-, Ingenieur- und Immobiliendienstleistungen konnte ich bereits mein Wissen
            in die Praxis umsetzen. In mehreren Kleinunternehmen war ich als Berater für IT Fragestellungen und zur Überwachung
            und Qualitätssicherung lokaler IT Infrastrukturen tätig. Im Januar 2008 habe ich mein Studium erfolgreich abgeschlossen
            und bin zurück nach Wetzlar gezogen.
                `
            }
        ];
    }
}