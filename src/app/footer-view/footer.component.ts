import { Component, ViewChild, Inject, ElementRef } from '@angular/core';

@Component({
    selector: 'footer-view',
    templateUrl: './footer.component.html',
    styleUrls: ['footer.style.css']
})
export class FooterComponent {
    githubIcon = require('../../../public/images/github.png');
    xingIcon = require('../../../public/images/xing.png');
    //gulpIcon = require('../../../public/images/gulp.jpg');
    constructor() {
    }
}