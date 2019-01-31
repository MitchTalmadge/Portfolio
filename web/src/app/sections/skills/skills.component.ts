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
    selector: "mt-skills",
    templateUrl: "skills.component.html",
    styleUrls: ["skills.component.css"],
})

export class MTSkillsComponent implements OnInit {

    public skillImages: {[skillName: string]: string} = {
        "java": require("./images/Java.svg"),
        "android": require("./images/Android.svg"),
        "linux": require("./images/Linux.svg"),
        "php": require("./images/PHP.svg"),
        "mysql": require("./images/MySQL.svg"),
        "wordpress": require("./images/WordPress.svg"),
        "autodesk": require("./images/Autodesk.svg"),
        "adobe": require("./images/Adobe.svg"),
    };

    constructor() {

    }

    public ngOnInit() {
    }

}
