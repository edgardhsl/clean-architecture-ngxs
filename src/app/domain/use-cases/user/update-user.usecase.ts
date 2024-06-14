import { UseCase } from "@/domain/base/use-case";
import { User } from "@/domain/entities/user";
import { UpdateUserModel } from "@/domain/models/user/update-user.model";
import { UserRepository } from "@/domain/repositories/user.repository";
import { Observable } from "rxjs";

export class UpdateUserCase implements UseCase<UpdateUserModel, User> {
    constructor (private _userRepository: UserRepository) {}

    execute (user: UpdateUserModel): Observable<User> {
        return this._userRepository.update(user);
    }
}
