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

import {Component} from "@angular/core";
import {LoaderService} from "../../core/services/loader.service";

@Component({
    selector: "mt-loader",
    templateUrl: "loader.component.html",
    styleUrls: ["loader.component.css"],
})
export class MTLoaderComponent {

    public loading: boolean;

    constructor(loaderService: LoaderService) {
        loaderService.isLoading().subscribe((loading) => this.loading = loading);
    }

}
