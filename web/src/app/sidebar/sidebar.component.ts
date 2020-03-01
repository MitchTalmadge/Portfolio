/*
 * Mitch Talmadge's Web Portfolio
 * Copyright (C) 2019 Mitch Talmadge
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */

import {Component, OnInit} from "@angular/core";

@Component({
    selector: "mt-sidebar",
    templateUrl: "sidebar.component.html",
    styleUrls: ["sidebar.component.scss"],
})

export class MTSidebarComponent implements OnInit {

    /**
     * The links to display in the sidebar.
     */
    public readonly links: Array<{ name: string, icon: string, url?: string, route?: string, strict?: boolean }> = [
        {
            name: "Home",
            icon: "fas fa-home",
            route: "/",
            strict: true,
        },
        {
            name: "About",
            icon: "fas fa-user-circle",
            route: "/about",
            strict: true,
        },
        /*{
            name: "Experience",
            icon: "fas fa-briefcase",
            route: "/work-experience",
            strict: true,
        },*/
        {
            name: "Service",
            icon: "fas fa-hands-helping",
            route: "/service",
            strict: false,
        },
        {
            name: "Skills",
            icon: "fas fa-laptop-code",
            route: "/skills",
            strict: true,
        },
        {
            name: "Awards",
            icon: "fas fa-trophy",
            route: "/awards",
            strict: true,
        },
        {
            name: "Certs",
            icon: "fas fa-award",
            route: "/certifications",
            strict: true,
        },
        // {
        //     name: "Projects",
        //     icon: "fas fa-code",
        //     route: "/projects",
        //     strict: false,
        // },
        {
            name: "Articles",
            icon: "fas fa-align-left",
            route: "/articles",
            strict: true,
        },
        {
            name: "Contact",
            icon: "fas fa-envelope",
            route: "/contact",
            strict: true,
        },
    ];

    constructor() {
    }

    public ngOnInit() {
    }

}
