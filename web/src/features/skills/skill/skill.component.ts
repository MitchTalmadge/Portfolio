import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'mt-skill',
    templateUrl: 'skill.component.html'
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