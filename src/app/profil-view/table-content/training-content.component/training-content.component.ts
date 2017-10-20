
import {Component, Input} from "@angular/core";
import {IContentValue} from "../../profil-view.interface";

@Component({
    selector: 'training-content',
    templateUrl: './training-content.component.html',
    styleUrls: ['./training-content.style.css']
})
export class TrainingContentComponent {
    @Input()
    trainingData: IContentValue;
}