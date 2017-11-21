import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {MTAppComponent} from "./app/app.component";
import {CoreModule} from "./core/core.module";
import {AppRoutesModule} from "./app.routes";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {AppBootstrapModule} from "./app/app-bootstrap.module";

@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutesModule,
        CoreModule,

        AppBootstrapModule
    ],
    declarations: [],
    providers: [],
    bootstrap: [MTAppComponent]
})
export class AppModule {
}