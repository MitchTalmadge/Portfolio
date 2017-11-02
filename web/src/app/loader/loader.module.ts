import {NgModule} from "@angular/core";

import {MTLoaderComponent} from "./loader.component";
import {SharedModule} from "../../shared/shared.module";

@NgModule({
    imports: [
        SharedModule
    ],
    declarations: [
        MTLoaderComponent
    ],
    exports: [
        MTLoaderComponent
    ],
    providers: [],
})
export class MTLoaderModule {
}
