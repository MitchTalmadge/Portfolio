import {NgModule} from "@angular/core";

import {MTHomeComponent} from "./home.component";
import {SharedModule} from "../../shared/shared.module";
import {DrawRoutesModule} from "./home.routes";

/**
 * The main voting page.
 */
@NgModule({
    imports: [
        SharedModule,
        DrawRoutesModule,
    ],
    declarations: [
        MTHomeComponent,
    ],
    exports: [],
    providers: [],
})
export class MTHomeModule {
}
