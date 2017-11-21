import {NgModule} from '@angular/core';

import {MTSkillsComponent} from './skills.component';
import {MTSkillsRoutesModule} from "./skills.routes";
import {SharedModule} from "../../shared/shared.module";
import {MTSkillComponent} from "./skill/skill.component";

@NgModule({
    imports: [
        SharedModule,
        MTSkillsRoutesModule
    ],
    exports: [],
    declarations: [
        MTSkillsComponent,
        MTSkillComponent
    ],
    providers: [],
})
export class MTSkillsModule {

}
