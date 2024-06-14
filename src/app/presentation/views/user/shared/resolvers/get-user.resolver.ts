import { HttpUserService } from "@/data/services/http-user.service";
import { inject } from "@angular/core";
import { ActivatedRouteSnapshot } from "@angular/router";

export const getUser = (route: ActivatedRouteSnapshot) => {
    const userService = inject(HttpUserService);
    return userService.get(route.paramMap.get("id") as string);
};
