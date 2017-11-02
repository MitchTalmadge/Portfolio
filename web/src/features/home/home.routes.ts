import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {MTHomeComponent} from "./home.component";

const routes: Routes = [
    {
        path: '',
        component: MTHomeComponent
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
export class DrawRoutesModule {
}