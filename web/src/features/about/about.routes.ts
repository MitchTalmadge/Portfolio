import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {MTAboutComponent} from "./about.component";

const routes: Routes = [
    {
        path: '',
        component: MTAboutComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ],
    providers: []
})
export class MTAboutRoutesModule {
}