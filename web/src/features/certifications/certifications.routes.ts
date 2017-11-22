import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {MTCertificationsComponent} from "./certifications.component";

const routes: Routes = [
    {
        path: '',
        component: MTCertificationsComponent
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
export class MTCertificationsRoutesModule {
}