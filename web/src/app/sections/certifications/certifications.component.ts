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
            require("./images/SoftwareDevelopmentFundamentals.jpg"),
        ],
        "mta-security": [
            require("./images/SecurityFundamentals.jpg"),
        ],
        "mta-html5": [
            require("./images/HTML5ApplicationDevelopmentFundamentals.jpg"),
        ],
        "cte-programming": [
            require("./images/Skill_Programming_1.jpg"),
            require("./images/Skill_Programming_2.jpg"),
        ],
        "cte-tech": [
            require("./images/Skill_Foundations_Of_Tech_1.jpg"),
            require("./images/Skill_Foundations_Of_Tech_2.jpg"),
        ],
        "cte-electronics": [
            require("./images/Skill_Electronics_1.jpg"),
            require("./images/Skill_Electronics_2.jpg"),
        ],
        "cte-woodworking": [
            require("./images/Skill_Woodworking_1.jpg"),
            require("./images/Skill_Woodworking_2.jpg"),
        ],
        "cte-3d": [
            require("./images/Skill_3DGraphics_1.jpg"),
            require("./images/Skill_3DGraphics_2.jpg"),
        ],
        "cte-auto": [
            require("./images/Skill_Auto_1.jpg"),
            require("./images/Skill_Auto_2.jpg"),
        ],
    };

    constructor() {
    }

    public ngOnInit() {
    }
}
