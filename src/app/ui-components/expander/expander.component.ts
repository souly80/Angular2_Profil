import {Component, Input} from "@angular/core";

@Component({
    selector: 'expander-component',
    templateUrl: 'expander.component.html',
    styleUrls: ['./expander.style.css']
})
export class ExpanderComponent {
    @Input()
    projectIcon:string;
    @Input()
    projectIconMobile:string;

    @Input()
    title:string;

    @Input()
    descriptionHidden:string;

    @Input()
    descriptionToggled:string;
}