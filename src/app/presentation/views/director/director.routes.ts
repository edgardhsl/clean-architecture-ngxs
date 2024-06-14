import { Routes } from "@angular/router";

export const directorRoutes: Routes = [
    {
        path: "",
        loadComponent: () => import("./director-search/director-search.component").then(c => c.DirectorSearchComponent)
    }
]