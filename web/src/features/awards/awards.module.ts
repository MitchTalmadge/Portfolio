import {NgModule} from '@angular/core';

import {MTAwardsComponent} from './awards.component';
import {MTAwardsRoutesModule} from "./awards.routes";
import {SharedModule} from "../../shared/shared.module";

@NgModule({
    imports: [
        SharedModule,
        MTAwardsRoutesModule
    ],
    exports: [],
    declarations: [MTAwardsComponent],
    providers: [],
})
export class MTAwardsModule {
}
