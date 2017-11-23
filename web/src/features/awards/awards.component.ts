import {Component, OnInit} from '@angular/core';
import {awards} from './static/award-definitions';

@Component({
    selector: 'mt-certifications',
    templateUrl: 'awards.component.html'
})

export class MTAwardsComponent implements OnInit {

    awards = awards;

    constructor() {
    }

    ngOnInit() {
    }
}