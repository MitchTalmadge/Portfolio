import {NgModule} from "@angular/core";

import {MTAboutComponent} from "./about.component";
import {SharedModule} from "../../shared/shared.module";
import {MTAboutRoutesModule} from "./about.routes";

@NgModule({
    imports: [
        SharedModule,
        MTAboutRoutesModule,
    ],
    declarations: [
        MTAboutComponent,
    ],
    exports: [],
    providers: [],
})
export class MTAboutModule {
}
