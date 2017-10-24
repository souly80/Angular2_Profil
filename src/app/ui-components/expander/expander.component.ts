import {Component, EventEmitter, Input, OnChanges, Output, SimpleChanges} from "@angular/core";

@Component({
    selector: 'expander-component',
    templateUrl: 'expander.component.html',
    styleUrls: ['./expander.style.css']
})
export class ExpanderComponent implements OnChanges {

    public itemExpaned: boolean;

    @Output()
    public isExpanded:EventEmitter<boolean>;

    constructor() {
        this.isExpanded = new EventEmitter();
    }

    public opened() {
        //this.isExpanded.next(true);
        this.itemExpaned = true;
    }

    public closed() {
        //this.isExpanded.next(false);
        this.itemExpaned = false;
    }

    ngOnChanges(changes: SimpleChanges): void {

    }


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