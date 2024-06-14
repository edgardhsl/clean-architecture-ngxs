import { UserRepository } from "@/domain/repositories/user.repository";
import { HttpUserService } from "../services/http-user.service";

export const userProvider = [
    {
        provide: UserRepository,
        useClass: HttpUserService
    }
];
