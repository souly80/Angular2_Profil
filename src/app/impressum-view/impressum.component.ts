import { Component, ViewChild, Inject, ElementRef } from '@angular/core';
import {CommonUtils} from '../CommonUtils';

@Component({
    selector: 'impressum-view',
    templateUrl: './impressum.component.html',
})
export class ImpressumComponent {
    impressumImg = require('../../../public/images/impresum.jpg');
    constructor() {
    }

    public scrollToBottom() {
        CommonUtils.scrollToBottomWithAnimate(0);
    }
}