import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {MTAwardsComponent} from "./awards.component";

const routes: Routes = [
    {
        path: '',
        component: MTAwardsComponent
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
export class MTAwardsRoutesModule {
}