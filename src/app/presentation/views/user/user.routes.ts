import { Routes } from "@angular/router";
import { getUser } from "./shared/resolvers/get-user.resolver";

export const userRoutes: Routes = [
    {
        path: "",
        loadComponent: () => import("./user-search/user-search.component").then((c) => c.UserSearchComponent)
    },
    {
        path: "novo",
        loadComponent: () => import("./user-create/user-create.component").then((c) => c.UserCreateComponent)
    },
    {
        path: ":id",
        loadComponent: () => import("./user-update/user-update.component").then((c) => c.UserUpdateComponent),
        resolve: {
            user: getUser
        }
    }
];
