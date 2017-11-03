import {NgModule} from "@angular/core";

import {MTAppComponent} from "./app.component";
import {CommonModule} from "@angular/common";
import {MTLoaderModule} from "./loader/loader.module";
import {RouterModule} from "@angular/router";
import {MTSidebarModule} from "./sidebar/sidebar.module";
import {MTHeaderModule} from "./header/header.module";

@NgModule({
    imports: [
        RouterModule,
        CommonModule,
        MTHeaderModule,
        MTLoaderModule,
        MTSidebarModule
    ],
    declarations: [MTAppComponent],
    exports: [],
    providers: [],
})
export class AppBootstrapModule {
}
