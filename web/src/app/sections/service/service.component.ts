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
    selector: "service",
    templateUrl: "service.component.html",
    styleUrls: ["service.component.scss"],
})

export class ServiceComponent implements OnInit {

    public hackTheUImages: { [id: string]: string[] } = {
        before: [
            require("./images/hacktheu-before.png"),
        ],
        after: [
            require("./images/hacktheu-after.png"),
        ],
    };

    public fllImages: { [id: string]: string[] } = {
        2014: [
            require("./images/fll-2014.jpg"),
        ],
        2015: [
            require("./images/fll-2015.jpg"),
        ],
        2016: [
            require("./images/fll-2016.jpg"),
        ],
    };

    constructor() {
    }

    public ngOnInit() {
    }
}
