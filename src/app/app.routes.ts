import { Routes } from "@angular/router";
import { NavbarComponent } from "./presentation/shared/navbar/navbar.component";

export const routes: Routes = [
    {
        path: "", redirectTo: "usuarios", pathMatch: "full"
    },
    {
        path: "usuarios",
        loadChildren: () => import("./presentation/views/user/user.routes").then(r => r.userRoutes),
        component: NavbarComponent
    }
];
