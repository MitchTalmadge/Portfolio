import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'mt-skill',
    templateUrl: 'skill.component.html',
    styleUrls: ['skill.component.css']
})

export class MTSkillComponent implements OnInit {

    @Input()
    public title: string;

    @Input()
    public src: string;

    constructor() {
    }

    ngOnInit() {
    }
}