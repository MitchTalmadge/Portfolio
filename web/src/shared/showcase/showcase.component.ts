import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'mt-showcase',
    templateUrl: 'showcase.component.html',
    styleUrls: ['showcase.component.css']
})

export class MTShowcaseComponent implements OnInit {

    @Input()
    public title: string;

    @Input()
    public images: string[] = [];

    constructor() {
    }

    ngOnInit() {
    }
}