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

import {Component, OnDestroy, OnInit} from "@angular/core";
import {NavigationEnd, Router} from "@angular/router";
import {filter} from "rxjs/operators";
import {Subscription} from "rxjs/Subscription";

@Component({
    selector: "mt-header",
    templateUrl: "header.component.html",
    styleUrls: ["header.component.scss"],
})

export class MTHeaderComponent implements OnInit, OnDestroy {

    /**
     * The contents of the header for various routes.
     */
    public readonly contents: Array<{ title: string, subtitle?: string, route: string, strict: boolean }> = [
        {
            title: "Mitch Talmadge",
            subtitle: "< Production & Software Engineer />",
            route: "/",
            strict: true,
        },
        {
            title: "Articles",
            route: "/articles",
            strict: true,
        },
        {
            title: "Biography",
            route: "/biography",
            strict: true,
        },
        {
            title: "Technical Skills",
            subtitle: "Technologies and Experience",
            route: "/skills",
            strict: true,
        },
        {
            title: "Certifications",
            route: "/certifications",
            strict: true,
        },
        {
            title: "Awards",
            route: "/awards",
            strict: true,
        },
        {
            title: "Service",
            subtitle: "Giving Back Whenever Possible",
            route: "/service",
            strict: true,
        },
        {
            title: "Contact Mitch",
            route: "/contact",
            strict: true,
        },
    ];

    /**
     * The header contents for the current route.
     */
    public currentContents: { title: string, subtitle?: string, route: string, strict: boolean } = null;

    /**
     * The subscription to the router events.
     */
    private routerSubscription: Subscription;

    constructor(private router: Router) {
    }

    public ngOnInit() {
        // Listen to route changes to update the current contents of the header.
        this.routerSubscription = this.router.events
            .pipe(
                filter((event) => event instanceof NavigationEnd),
            )
            .subscribe((event: NavigationEnd) => {
                // Iterate over all header contents to find a matching route.
                for (const contents of this.contents) {
                    // Strict routes must exactly match the url.
                    if (contents.strict) {
                        if (event.urlAfterRedirects === contents.route) {
                            this.currentContents = contents;
                            break;
                        }
                    } else {
                        if (event.urlAfterRedirects.startsWith(contents.route)) {
                            this.currentContents = contents;
                            break;
                        }
                    }
                }
            });
    }

    public ngOnDestroy(): void {
        this.routerSubscription.unsubscribe();
    }
}
