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
})

export class ServiceComponent implements OnInit {

    public serviceImages: { [id: string]: string[] } = {
        "fll-2014": [
            require("./images/First Lego League 2014.jpg")
        ],
        "fll-2015": [
            require("./images/First Lego League 2015.jpg")
        ],
        "fll-2016": [
            require("./images/First Lego League 2016.jpg")
        ],
    };

    constructor() {
    }

    public ngOnInit() {
    }
}
