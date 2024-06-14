import { UseCase } from "@/domain/base/use-case";
import { User } from "@/domain/entities/user";
import { UserRepository } from "@/domain/repositories/user.repository";
import { Observable } from "rxjs";

export class GetUserCase implements UseCase<string, User> {
    constructor (private _userRepository: UserRepository) {}

    execute (id: string): Observable<User> {
        return this._userRepository.get(id);
    }
}
