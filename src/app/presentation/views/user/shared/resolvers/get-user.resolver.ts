import { GetUserCase } from "@/domain/use-cases/user/get-user.usecase";
import { inject } from "@angular/core";
import { ActivatedRouteSnapshot } from "@angular/router";

export const getUser = (route: ActivatedRouteSnapshot) => {
    const getUserUseCase = inject(GetUserCase);
    return getUserUseCase.execute(route.paramMap.get("id") as string);
};
