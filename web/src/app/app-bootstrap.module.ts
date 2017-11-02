import {NgModule} from "@angular/core";

import {MTAppComponent} from "./app.component";
import {CommonModule} from "@angular/common";
import {MTLoaderModule} from "./loader/loader.module";
import {RouterModule} from "@angular/router";

@NgModule({
    imports: [
        RouterModule,
        CommonModule,
        MTLoaderModule
    ],
    declarations: [MTAppComponent],
    exports: [],
    providers: [],
})
export class AppBootstrapModule {
}
