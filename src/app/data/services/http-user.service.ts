import { CreateUserDTO } from "@/data/dtos/user/create-user.dto";
import { UpdateUserDTO } from "@/data/dtos/user/update-user.dto";
import { UserDTO } from "@/data/dtos/user/user.dto";
import { UserMapper } from "@/data/mappers/user.mapper";
import { User } from "@/domain/entities/user";
import { UserRepository } from "@/domain/repositories/user.repository";
import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { environment } from "@env/environment.prod";
import { Observable, first, map } from "rxjs";

@Injectable({
    providedIn: "root"
})
export class HttpUserService implements UserRepository {
    private _httpClient = inject(HttpClient);
    private readonly _api = environment.apiRoot.concat("/users");

    userMapper = new UserMapper();

    find (): Observable<User[]> {
        return this._httpClient.get<UserDTO[]>(this._api).pipe(
            first(),
            map(response => {
                return response.map(this.userMapper.fromMap);
            })
        );
    }

    get (id: string): Observable<User> {
        return this._httpClient.get<UserDTO>(`${this._api}/${id}`).pipe(
            first(),
            map(this.userMapper.fromMap)
        );
    }

    create (user: CreateUserDTO): Observable<User> {
        return this._httpClient.post<UserDTO>(this._api, user).pipe(
            first(),
            map(this.userMapper.fromMap)
        );
    }

    update (id: string, user: UpdateUserDTO): Observable<User> {
        return this._httpClient.put<UserDTO>(`${this._api}/${id}`, user).pipe(
            first(),
            map(this.userMapper.fromMap)
        );
    }
}
