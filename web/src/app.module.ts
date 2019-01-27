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

import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {AppRoutesModule} from "./app.routes";
import {AppBootstrapModule} from "./app/app-bootstrap.module";
import {MTAppComponent} from "./app/app.component";
import {CoreModule} from "./core/core.module";

@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutesModule,
        CoreModule,

        AppBootstrapModule,
    ],
    declarations: [],
    providers: [],
    bootstrap: [MTAppComponent],
})
export class AppModule {
}
