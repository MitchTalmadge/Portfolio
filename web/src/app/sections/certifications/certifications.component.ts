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
    selector: "work-experience",
    templateUrl: "certifications.component.html",
})
export class MTCertificationsComponent implements OnInit {

    public certificationImages: { [id: string]: string[] } = {
        "cte-3d": [
            require("./images/cte-3d.jpg"),
        ],
        "cte-auto": [
            require("./images/cte-auto.jpg"),
        ],
        "cte-electronics": [
            require("./images/cte-electronics.jpg"),
        ],
        "cte-financial": [
            require("./images/cte-financial.jpg"),
        ],
        "cte-programming": [
            require("./images/cte-programming.jpg"),
        ],
        "cte-tech": [
            require("./images/cte-tech.jpg"),
        ],
        "cte-woodworking": [
            require("./images/cte-wood.jpg"),
        ],
        "mta-software": [
            require("./images/mta-software.jpg"),
        ],
        "mta-security": [
            require("./images/mta-security.jpg"),
        ],
        "mta-html5": [
            require("./images/mta-html5.jpg"),
        ],
        "valvoline": [
            require("./images/valvoline.jpg"),
        ]
    };

    constructor() {
    }

    public ngOnInit() {
    }
}
