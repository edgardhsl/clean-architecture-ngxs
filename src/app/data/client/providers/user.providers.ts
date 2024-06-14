import { UserRepository } from "@/domain/repositories/user.repository";
import { CreateUserCase } from "@/domain/use-cases/user/create-user.usecase";
import { FindUserCase } from "@/domain/use-cases/user/find-user.usecase";
import { GetUserCase } from "@/domain/use-cases/user/get-user.usecase";
import { UpdateUserCase } from "@/domain/use-cases/user/update-user.usecase";
import { UserService } from "../services/user.service";

const createUserProvider = {
    provide: CreateUserCase,
    useFactory: (repository: UserRepository) => new CreateUserCase(repository),
    deps: [UserRepository]
};

const findUserProviders = {
    provide: FindUserCase,
    useFactory: (repository: UserRepository) => new FindUserCase(repository),
    deps: [UserRepository]
};

const getUserProviders = {
    provide: GetUserCase,
    useFactory: (repository: UserRepository) => new GetUserCase(repository),
    deps: [UserRepository]
};

const updateUserProviders = {
    provide: UpdateUserCase,
    useFactory: (repository: UserRepository) => new UpdateUserCase(repository),
    deps: [UserRepository]
};

export const userProviders = [
    createUserProvider,
    findUserProviders,
    getUserProviders,
    updateUserProviders,
    {
        provide: UserRepository,
        useClass: UserService
    }
];
