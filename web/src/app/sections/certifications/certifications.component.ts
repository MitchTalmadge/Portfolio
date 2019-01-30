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
    templateUrl: "certifications.component.html",
})

export class MTCertificationsComponent implements OnInit {

    public certificationImages: { [id: string]: string[] } = {
        "mta-software": [
            require("./images/scaled/SoftwareDevelopmentFundamentals.jpg"),
        ],
        "mta-security": [
            require("./images/scaled/SecurityFundamentals.jpg"),
        ],
        "mta-html5": [
            require("./images/scaled/HTML5ApplicationDevelopmentFundamentals.jpg"),
        ],
        "cte-programming": [
            require("./images/scaled/Skill_Programming.jpg"),
        ],
        "cte-tech": [
            require("./images/scaled/Skill_Foundations_Of_Tech.jpg"),
        ],
        "cte-electronics": [
            require("./images/scaled/Skill_Electronics.jpg"),
        ],
        "cte-woodworking": [
            require("./images/scaled/Skill_Woodworking.jpg"),
        ],
        "cte-3d": [
            require("./images/scaled/Skill_3DGraphics.jpg"),
        ],
        "cte-auto": [
            require("./images/scaled/Skill_Auto.jpg"),
        ],
    };

    constructor() {
    }

    public ngOnInit() {
    }
}
