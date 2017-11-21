import {Component, OnInit} from '@angular/core';
const descriptions = require('./descriptions.xml');

@Component({
    selector: 'mt-skills',
    templateUrl: 'skills.component.html',
    styleUrls: ['skills.component.css']
})

export class MTSkillsComponent implements OnInit {

    skills: [{ title: string, image: string, description?: string }] = [
        {
            title: "Java",
            image: require("./images/Java.svg")
        }
    ];

    constructor() {

        // Populate skills variable with descriptions from file.
        for (let skill of this.skills) {
            skill.description = descriptions[skill.title.toLowerCase()];
        }
    }

    ngOnInit() {
    }
}