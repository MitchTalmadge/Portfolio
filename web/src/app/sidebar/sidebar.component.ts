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
    styleUrls: ["sidebar.component.css"],
})

export class MTSidebarComponent implements OnInit {

    /**
     * The links to display in the sidebar.
     */
    public readonly links: Array<{ name: string, url?: string, route?: string, strict?: boolean }> = [
        {
            name: "Home",
            route: "/",
            strict: true,
        },
        {
            name: "Biography",
            route: "/biography",
            strict: true,
        },
        {
            name: "Articles",
            route: "/articles",
            strict: true,
        },
        {
            name: "Awards",
            route: "/awards",
            strict: true,
        },
        {
            name: "Certifications",
            route: "/certifications",
            strict: true,
        },
        {
            name: "Projects",
            route: "/projects",
            strict: false,
        },
        {
            name: "Service",
            route: "/service",
            strict: false,
        },
        {
            name: "Technical Skills",
            route: "/skills",
            strict: true,
        },
        {
            name: "Contact",
            route: "/contact",
            strict: true,
        },
    ];

    constructor() {
    }

    public ngOnInit() {
    }

}
