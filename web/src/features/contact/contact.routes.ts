import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {MTContactComponent} from "./contact.component";

const routes: Routes = [
    {
        path: '',
        component: MTContactComponent
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
export class MTContactRoutesModule {
}