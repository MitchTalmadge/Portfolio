import {NgModule} from '@angular/core';

import {MTSidebarComponent} from './sidebar.component';
import {SharedModule} from "../../shared/shared.module";

@NgModule({
    imports: [SharedModule],
    exports: [MTSidebarComponent],
    declarations: [MTSidebarComponent],
    providers: [],
})
export class MTSidebarModule {

}
