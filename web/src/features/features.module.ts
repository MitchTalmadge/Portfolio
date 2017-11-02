import {NgModule} from "@angular/core";
import {MTHomeModule} from "./home/home.module";

/**
 * This module groups together modules and components which are part of larger "features."
 * These modules and components aren't meant to be re-used. Examples are pages, sections of pages, specific modals, etc.
 */
@NgModule({
    imports: [],
    declarations: [],
    exports: [
        MTHomeModule
    ],
    providers: [],
})
export class FeaturesModule {
}
