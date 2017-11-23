import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {MTShowcaseModule} from "./showcase/showcase.module";
import {MTGlassPanelModule} from "./glass-panel/glass-panel.module";

/**
 * This module is dedicated to highly re-usable components that are used often in feature components (pages, etc)
 */
@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,

        // Components
        MTGlassPanelModule,
        MTShowcaseModule
    ],
    declarations: [],
    exports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,

        // Components
        MTGlassPanelModule,
        MTShowcaseModule
    ],
    providers: [],
})
export class SharedModule {
}
