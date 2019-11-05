/*
 * Mitch Talmadge's Web Portfolio
 * Copyright (C) 2019 Mitch Talmadge
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */

import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [
    {
        path: "",
        loadChildren: "./app/sections/home/home.module#HomeModule",
    },
    {
        path: "articles",
        loadChildren: "./app/sections/articles/articles.module#ArticlesModule",
    },
    {
        path: "awards",
        loadChildren: "./app/sections/awards/awards.module#MTAwardsModule",
    },
    {
        path: "biography",
        loadChildren: "./app/sections/biography/biography.module#BiographyModule",
    },
    {
        path: "certifications",
        loadChildren: "./app/sections/certifications/certifications.module#MTCertificationsModule",
    },
    {
        path: "contact",
        loadChildren: "./app/sections/contact/contact.module#MTContactModule",
    },
    {
        path: "service",
        loadChildren: "./app/sections/service/service.module#ServiceModule",
    },
    {
        path: "skills",
        loadChildren: "./app/sections/skills/skills.module#MTSkillsModule",
    },
    {
        path: "work-experience",
        loadChildren: "./app/sections/work-experience/work-experience.module#WorkExperienceModule",
    },
    {
        path: "**",
        redirectTo: "/",
        pathMatch: "full",
    },
];

/**
 * The root routing module. Other routes can be found next to their respective features.
 */
@NgModule({
    imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: "enabled", useHash: true})],
    exports: [RouterModule],
})
export class AppRoutesModule {
}
