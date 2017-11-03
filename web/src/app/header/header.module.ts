import {NgModule} from '@angular/core';

import {MTHeaderComponent} from './header.component';
import {SharedModule} from "../../shared/shared.module";

@NgModule({
    imports: [SharedModule],
    exports: [MTHeaderComponent],
    declarations: [MTHeaderComponent],
    providers: [],
})
export class MTHeaderModule {
}
