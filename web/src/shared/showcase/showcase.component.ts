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

import {Component, Input, OnInit} from "@angular/core";

@Component({
    selector: "mt-showcase",
    templateUrl: "showcase.component.html",
    styleUrls: ["showcase.component.css"],
})

export class MTShowcaseComponent implements OnInit {

    @Input()
    public title: string;

    @Input()
    public images: string[] = [];

    /**
     * The index of the current image being displayed from the images array.
     */
    public currentImageIndex: number = 0;

    constructor() {
    }

    public ngOnInit() {
    }

    /**
     * Displays the previous image.
     */
    public previousImage(): void {
        if (this.currentImageIndex == 0) {
            this.currentImageIndex = this.images.length - 1;
        }
        else {
            this.currentImageIndex -= 1;
        }
    }

    /**
     * Displays the next image.
     */
    public nextImage(): void {
        if (this.currentImageIndex == this.images.length - 1) {
            this.currentImageIndex = 0;
        }
        else {
            this.currentImageIndex += 1;
        }
    }
}
