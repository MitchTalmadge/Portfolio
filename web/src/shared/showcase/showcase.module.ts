import {NgModule} from '@angular/core';

import {MTShowcaseComponent} from './showcase.component';
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {MTGlassPanelModule} from "../glass-panel/glass-panel.module";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,

        MTGlassPanelModule
    ],
    exports: [MTShowcaseComponent],
    declarations: [MTShowcaseComponent],
    providers: [],
})
export class MTShowcaseModule {
}
