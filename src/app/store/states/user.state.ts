import { UserDTO } from "@/data/dtos/user/user.dto";
import { HttpUserService } from "@/data/services/http-user.service";
import { Injectable, inject } from "@angular/core";
import { Action, Selector, State, StateContext } from "@ngxs/store";
import { Observable, tap } from "rxjs";
import { CreateUser, FindUser, GetUser } from "../actions/user.action";
import { UserStateModel } from "../models/user-state.model";
import { UserStoreRepository } from "../repositories/user-store.repository";
import { UpdateUser } from "./../actions/user.action";

@State<UserStateModel>({
    name: "user",
    defaults: {
        users: [],
        user: {} as UserDTO,
        loaded: false
    }
})
@Injectable()
export class UserState implements UserStoreRepository {
    private _userService = inject(HttpUserService);

    @Selector()
    static users (state: UserStateModel) {
        return state.users;
    }

    @Selector()
    static user (state: UserStateModel) {
        return state.user;
    }

    @Action(FindUser)
    find ({ getState, setState }: StateContext<UserStateModel>): Observable<UserDTO[]> {
        return this._userService.find().pipe(
            tap((users) => {
                const state = getState();
                setState({ ...state, users, loaded: true });
            })
        );
    }

    @Action(GetUser)
    get ({ getState, setState }: StateContext<UserStateModel>, { id }: GetUser): Observable<UserDTO> | undefined {
        const state = getState();
        const users = state.users;
        const user = users.findIndex((user: UserDTO) => user.id === id);

        if (id && (id !== "" || id !== null)) {
            setState({ ...state, user: users[user] });
        } else {
            return this._userService.get(id).pipe(
                tap((user) => {
                    setState({ ...state, users: [user], user });
                })
            );
        }
    }

    @Action(CreateUser)
    create ({ getState, patchState }: StateContext<UserStateModel>, { payload }: CreateUser): Observable<UserDTO> {
        return this._userService.create(payload).pipe(
            tap(user => {
                const state = getState();
                patchState({ users: [...state.users, user] });
            })
        );
    }

    @Action(UpdateUser)
    update ({ getState, patchState }: StateContext<UserStateModel>, { id, payload }: UpdateUser): Observable<UserDTO> {
        return this._userService.update(id, payload).pipe(
            tap(() => {
                const state = getState();
                const users = state.users.map(user => {
                    return user.id === payload.id ? { ...user, ...payload } : user;
                });
                return patchState({ users });
            })
        );
    }
}
