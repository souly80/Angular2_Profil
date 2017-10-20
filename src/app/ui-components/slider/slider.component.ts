
import {Component} from "@angular/core";
import {ISliderInfo} from "./slider.interface";

@Component({
    selector: 'slider-component',
    templateUrl: './slider.component.html',
    styleUrls: ['./slider.style.css']
})
export class SliderComponent {
    public sliderInfos: ISliderInfo[];

    constructor() {
        this.sliderInfos = this.getCompaniesStatements();
    }

    getCompaniesStatements(): ISliderInfo[]{
        return [
            {
                statement:`Soulaymane Zemmouri arbeitete bei uns in einem Projekt für ein Javascript Portal im Banking Umfeld als freiberuflicher Senior Softwareentwickler.
                Beweisen konnte er seine Kenntnisse besonders im Bereich Angular 4 und Javascript/Typescript. Die Zusammenarbeit machte Spaß, er war engagiert, zuverlässig und stets hilfsbereit. Ich kann ihn uneingeschränkt für eine Beschäftigung in diesem Bereich empfehlen.
                Viel Erfolg weiterhin!`,
                imageURL: require('../../../../public/images/crealogix.jpg')
            },
            {
                statement:`Herr Zemmouri ist für die Position als Softwareentwickler auf Basis von .NET und Angular sehr gut geeignet
                und ich empfehle eine Beschäftigung in diesem Bereich, weil dies seinen Fähigkeiten in einem hohen Grade entspricht.`,
                imageURL: require('../../../../public/images/bosch.jpg')
            },
            {
                statement:`Zudem war Herr Zemmouri ein sehr ehrgeiziger und engagierter Mitarbeiter, der stets einen überdurchschnittlichen Einsatz für unser Unternehmen zeigt.`,
                imageURL: require('../../../../public/images/groz.beckert.jpg')
            },
            {
                statement:`Er zeichnete sich durch eine hohe Motivation, Eigeninitiative, hohe Auffassungsgabe sowie ein Zielorientiertes und effektives Arbeiten aus.`,
                imageURL: require('../../../../public/images/siemens.jpg')
            },
            {
                statement:`Alle ihm zugeteilten Aufgaben hat Herr Zemmouri zu unserer vollsten Zufriedenheit erledigt. Wir waren mit seinen Leistungen außerodentlich zufrieden.`,
                imageURL: require('../../../../public/images/frauenhofer.jpg')
            },
            {
                statement:`Herr Zemmouri verfügt über gute fachliche Kenntnisse. Er beherrschte nach kurzer Zeit den Umgang mit den neuen Tools und Techniken.`,
                imageURL: require('../../../../public/images/thales.jpg')
            }
        ];
    }
}