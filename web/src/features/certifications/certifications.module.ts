import {NgModule} from '@angular/core';

import {MTCertificationsComponent} from './certifications.component';
import {MTCertificationsRoutesModule} from "./certifications.routes";
import {SharedModule} from "../../shared/shared.module";

@NgModule({
    imports: [
        SharedModule,
        MTCertificationsRoutesModule
    ],
    exports: [],
    declarations: [MTCertificationsComponent],
    providers: [],
})
export class MTCertificationsModule {
}
