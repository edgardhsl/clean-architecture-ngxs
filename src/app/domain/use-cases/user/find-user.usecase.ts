import { UseCase } from "@/domain/base/use-case";
import { User } from "@/domain/entities/user";
import { UserRepository } from "@/domain/repositories/user.repository";
import { Observable } from "rxjs";

export class FindUserCase implements UseCase<any, User[]> {
    constructor (private _userRepository: UserRepository) {}

    execute (filter?: any): Observable<User[]> {
        return this._userRepository.find(filter);
    }
}
