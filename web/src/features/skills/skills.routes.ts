import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {MTSkillsComponent} from "./skills.component";

const routes: Routes = [
    {
        path: '',
        component: MTSkillsComponent
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
export class MTSkillsRoutesModule {
}