import { UseCase } from "@/domain/base/use-case";
import { User } from "@/domain/entities/user";
import { UserFilter } from "@/domain/filters/user.filter";
import { UserRepository } from "@/domain/repositories/user.repository";
import { Observable } from "rxjs";

export class FindUserCase implements UseCase<UserFilter, User[]> {
    constructor (private _userRepository: UserRepository) {}

    execute (filter?: UserFilter): Observable<User[]> {
        return this._userRepository.find(filter);
    }
}
