import {NgModule} from '@angular/core';

import {MTContactComponent} from './contact.component';
import {SharedModule} from "../../shared/shared.module";
import {MTContactRoutesModule} from "./contact.routes";
import {MTContactFormComponent} from "./contact-form/contact-form.component";

@NgModule({
    imports: [
        SharedModule,
        MTContactRoutesModule
    ],
    exports: [],
    declarations: [
        MTContactComponent,
        MTContactFormComponent
    ],
    providers: [],
})
export class MTContactModule {

}
