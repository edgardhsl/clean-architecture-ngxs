import { UserDTO } from "@/data/dtos/user/user.dto";
import { UserRepository } from "@/domain/repositories/user.repository";
import { RestClient } from "@/domain/request/client/rest-client";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
    providedIn: "root"
})
export class UserService implements UserRepository {
    constructor (
        private _restClient: RestClient<UserDTO>
    ) {}

    find (): Observable<UserDTO[]> {
        return this._restClient.get("users") as Observable<UserDTO[]>;
    }

    get (id: string): Observable<UserDTO> {
        return this._restClient.get(`users/${id}`) as Observable<UserDTO>;
    }

    create (body: UserDTO): Observable<UserDTO> {
        return this._restClient.post("users", body);
    }

    update (body: UserDTO): Observable<UserDTO> {
        return this._restClient.put(`users/${body.id}`, body);
    }
}
