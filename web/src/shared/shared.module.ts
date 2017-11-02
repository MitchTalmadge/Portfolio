import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";

/**
 * This module is dedicated to highly re-usable components that are used often in feature components (pages, etc)
 */
@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
    ],
    declarations: [],
    exports: [
        // Common modules used throughout the application
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
    ],
    providers: [],
})
export class SharedModule {
}
