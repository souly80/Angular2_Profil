import { Component } from '@angular/core';

import { Observable } from 'rxjs/Rx';

import { ContactService } from './contact.service';
import {CommonUtils} from '../CommonUtils';

@Component({
    selector: 'contact-view',
    templateUrl: './contact.component.html',
    providers: [ContactService],
})
export class ContactComponent {
    contactImg = require('../../../public/images/me.jpg');
    contactContents: any;
    private skills: any;
    private skill: string;
    private pointer: number = 0;
    constructor(private contactService: ContactService) {
        this.contactContents = this.contactService.getContactContents();
        this.skills = ["C#", "Java", "JavaScript", "CSS", "AngularJS", "Angular 2", "Typescript", "..."];
        Observable.interval(2000)
            .subscribe((x) => {
                if (this.pointer >= this.skills.length - 1)
                    this.pointer = 0;
                else
                    this.pointer++;
                this.skill = this.skills[this.pointer];
            });
    }

    public scrollToBottom() {
        CommonUtils.scrollToBottomWithAnimate(0);
    }

}