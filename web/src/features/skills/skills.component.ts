import {Component, OnInit} from '@angular/core';
import {getSkills} from './static/skill-definitions';

@Component({
    selector: 'mt-skills',
    templateUrl: 'skills.component.html',
    styleUrls: ['skills.component.css']
})

export class MTSkillsComponent implements OnInit {

    skills = getSkills();

    constructor() {
        
    }

    ngOnInit() {
    }
}