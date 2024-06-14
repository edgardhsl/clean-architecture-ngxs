import { Observable } from "rxjs";
import { User } from "../entities/user";
import { CreateUserModel } from "../models/user/create-user.model";
import { UpdateUserModel } from "../models/user/update-user.model";

export abstract class UserRepository {
    abstract find(filter?: any): Observable<User[]>;
    abstract get(id: string): Observable<User>;
    abstract create(user: CreateUserModel): Observable<User>;
    abstract update(user: UpdateUserModel): Observable<User>;
}
