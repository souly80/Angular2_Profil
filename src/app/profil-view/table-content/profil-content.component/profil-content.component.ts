
import {Component, Input} from "@angular/core";
import {IProfilData} from "../../profil-view.interface";

@Component({
    selector: 'profil-content',
    templateUrl: './profil-content.component.html',
    styleUrls: ['./profil-content.style.css']
})
export class ProfilContentComponent {
    @Input()
    profilData: IProfilData;
}