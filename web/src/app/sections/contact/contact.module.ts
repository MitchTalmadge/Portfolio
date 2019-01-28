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

import {SharedModule} from "../../../shared/shared.module";
import {ContactFormComponent} from "./contact-form/contact-form.component";
import {ContactComponent} from "./contact.component";
import {MTContactRoutesModule} from "./contact.routes";

@NgModule({
    imports: [
        SharedModule,
        MTContactRoutesModule,
    ],
    exports: [],
    declarations: [
        ContactComponent,
        ContactFormComponent,
    ],
    providers: [],
})
export class MTContactModule {

}
