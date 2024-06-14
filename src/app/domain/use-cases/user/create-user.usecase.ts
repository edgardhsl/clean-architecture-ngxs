import { UseCase } from "@/domain/base/use-case";
import { User } from "@/domain/entities/user";
import { CreateUserModel } from "@/domain/models/user/create-user.model";
import { UserRepository } from "@/domain/repositories/user.repository";
import { Observable } from "rxjs";

export class CreateUserCase implements UseCase<CreateUserModel, User> {
    constructor (private _userRepository: UserRepository) {}

    execute (user: CreateUserModel): Observable<User> {
        return this._userRepository.create(user);
    }
}
