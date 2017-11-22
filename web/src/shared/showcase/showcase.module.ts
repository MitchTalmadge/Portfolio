import {NgModule} from '@angular/core';

import {MTShowcaseComponent} from './showcase.component';
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";

@NgModule({
    imports: [
        CommonModule,
        FormsModule
    ],
    exports: [MTShowcaseComponent],
    declarations: [MTShowcaseComponent],
    providers: [],
})
export class MTShowcaseModule {
}
