import {NgModule} from '@angular/core';

import {MTGlassPanelBodyDirective, MTGlassPanelComponent, MTGlassPanelHeaderDirective} from './glass-panel.component';
import {CommonModule} from "@angular/common";

@NgModule({
    imports: [
        CommonModule
    ],
    exports: [
        MTGlassPanelComponent,
        MTGlassPanelHeaderDirective,
        MTGlassPanelBodyDirective
    ],
    declarations: [
        MTGlassPanelComponent,
        MTGlassPanelHeaderDirective,
        MTGlassPanelBodyDirective
    ],
    providers: [],
})
export class MTGlassPanelModule {
}
