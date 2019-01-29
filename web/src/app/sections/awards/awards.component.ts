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
    selector: "mt-certifications",
    templateUrl: "awards.component.html",
})

export class MTAwardsComponent implements OnInit {

    public awardImages: { [id: string]: string[] } = {
        "sterling-1": [
            require("./images/Award_SterlingScholar_Winner.jpg")
        ],
        "sterling-2": [
            require("./images/Award_SterlingScholar_ComputerTech.jpg")
        ],
        "sterling-3": [
            require("./images/Award_SterlingScholar_SkilledAndTech.jpg")
        ],
        "cusef-1": [
            require("./images/CUSEF1.jpg")
        ],
        "cusef-2": [
            require("./images/CUSEF2.jpg")
        ],
        "cusef-3": [
            require("./images/CUSEF3.jpg")
        ],
        "middle-1": [
            require("./images/Award_Elkridge_Programming.jpg")
        ],
        "middle-2": [
            require("./images/Award_Elkridge_StageCrew.jpg")
        ],
        "middle-3": [
            require("./images/Award_Elkridge_Citizenship.jpg")
        ],
    };

    constructor() {
    }

    public ngOnInit() {
    }
}
