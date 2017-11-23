import {NgModule} from '@angular/core';

import {MTContactComponent} from './contact.component';
import {SharedModule} from "../../shared/shared.module";
import {MTContactRoutesModule} from "./contact.routes";

@NgModule({
    imports: [
        SharedModule,
        MTContactRoutesModule
    ],
    exports: [],
    declarations: [MTContactComponent],
    providers: [],
})
export class MTContactModule {

}
