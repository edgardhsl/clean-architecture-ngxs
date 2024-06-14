import { User } from "@/domain/entities/user";
import { UserRepository } from "@/domain/repositories/user.repository";
import { QuarkClient } from "@aiandralves/tivic-ui";
import { Injectable, inject } from "@angular/core";
import { environment } from "@env/environment.prod";
import { Observable, first, map } from "rxjs";
import { CreateUserDTO } from "../dtos/user/create-user.dto";
import { UpdateUserDTO } from "../dtos/user/update-user.dto";
import { UserDTO } from "../dtos/user/user.dto";
import { UserMapper } from "../mappers/user/user.mapper";

@Injectable({
    providedIn: "root"
})
export class QuarkUserService implements UserRepository {
    private _quark = inject(QuarkClient);
    private readonly _api = "users";

    userMapper = new UserMapper();

    find (): Observable<User[]> {
        return this._quark.get<UserDTO[]>({
            url: this._api,
            environment
        }).pipe(
            first(),
            map(response => {
                return response.map(this.userMapper.fromMap);
            })
        );
    }

    get (id: string): Observable<User> {
        return this._quark.get<UserDTO>({
            url: `${this._api}/${id}`,
            environment
        }).pipe(
            first(),
            map(this.userMapper.fromMap)
        );
    }

    create (body: CreateUserDTO): Observable<User> {
        return this._quark.post<UserDTO, CreateUserDTO>({
            url: this._api,
            environment,
            body
        }).pipe(
            first(),
            map(this.userMapper.fromMap)
        );
    }

    update (id: string, body: UpdateUserDTO): Observable<User> {
        return this._quark.put<UserDTO, UpdateUserDTO>({
            url: `${this._api}/${id}`,
            environment,
            body
        }).pipe(
            first(),
            map(this.userMapper.fromMap)
        );
    }
}
