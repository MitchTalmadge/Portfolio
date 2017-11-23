import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [
    {
        path: '',
        loadChildren: './features/home/home.module#MTHomeModule'
    },
    {
        path: 'about',
        loadChildren: './features/about/about.module#MTAboutModule'
    },
    {
        path: 'skills',
        loadChildren: './features/skills/skills.module#MTSkillsModule'
    },
    {
        path: 'certifications',
        loadChildren: './features/certifications/certifications.module#MTCertificationsModule'
    },
    {
        path: 'awards',
        loadChildren: './features/awards/awards.module#MTAwardsModule'
    },
    {
        path: '**',
        redirectTo: '/',
        pathMatch: 'full'
    }
];

/**
 * The root routing module. Other routes can be found next to their respective features.
 */
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutesModule {
}