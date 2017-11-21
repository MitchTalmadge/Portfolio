import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'mt-sidebar',
    templateUrl: 'sidebar.component.html',
    styleUrls: ['sidebar.component.css']
})

export class MTSidebarComponent implements OnInit {

    /**
     * The links to display in the sidebar.
     */
    readonly links: [{name: string, route: string, strict: boolean}] = [
        {
            name: 'Home',
            route: '/',
            strict: true
        },
        {
            name: 'About Mitch',
            route: '/about',
            strict: true
        },
        {
            name: 'Technical Skills',
            route: '/skills',
            strict: true
        },
        {
            name: 'Certifications',
            route: '/certifications',
            strict: true
        },
        {
            name: 'Awards',
            route: '/awards',
            strict: true
        },
        {
            name: 'Projects',
            route: '/projects',
            strict: false
        },
        {
            name: 'Contact',
            route: '/contact',
            strict: true
        }
    ];

    constructor() {
    }

    ngOnInit() {
    }

}