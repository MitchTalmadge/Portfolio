import {Component, OnInit} from '@angular/core';
import {certifications} from './static/certification-definitions';

@Component({
    selector: 'mt-certifications',
    templateUrl: 'certifications.component.html'
})

export class MTCertificationsComponent implements OnInit {

    certifications = certifications;

    constructor() {
    }

    ngOnInit() {
    }
}