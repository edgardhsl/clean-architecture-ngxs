import { UserDTO } from "@/data/dtos/user/user.dto";
import { CreateUserCase } from "@/domain/use-cases/user/create-user.usecase";
import { FindUserCase } from "@/domain/use-cases/user/find-user.usecase";
import { GetUserCase } from "@/domain/use-cases/user/get-user.usecase";
import { UpdateUserCase } from "@/domain/use-cases/user/update-user.usecase";
import { Injectable, inject } from "@angular/core";
import { Action, Selector, State, StateContext } from "@ngxs/store";
import { Observable, tap } from "rxjs";
import { CreateUser, FindUser, GetUser, UpdateUser } from "../actions/user.action";
import { UserStateModel } from "../models/user-state.model";

@State<UserStateModel>({
    name: "user",
    defaults: {
        users: [],
        user: {} as UserDTO
    }
})
@Injectable()
export class UserState {
    private _createUserUseCase = inject(CreateUserCase);
    private _findUserUseCase = inject(FindUserCase);
    private _getUserUseCase = inject(GetUserCase);
    private _updateUserUseCase = inject(UpdateUserCase);

    @Selector()
    static user (state: UserStateModel) {
        return state.user;
    }

    @Selector()
    static users (state: UserStateModel) {
        return state.users;
    }

    @Action(FindUser)
    find ({ getState, setState }: StateContext<UserStateModel>, { payload }: FindUser): Observable<UserDTO[]> {
        return this._findUserUseCase.execute(payload).pipe(
            tap((users) => {
                const state = getState();
                setState({ ...state, users });
            })
        );
    }

    @Action(GetUser)
    get ({ getState, setState }: StateContext<UserStateModel>, { id }: GetUser): Observable<UserDTO> {
        const state = getState();
        const users = state.users;
        const user = users.findIndex((user: UserDTO) => user.id === id);

        if (id && (id !== "" || id !== null)) {
            setState({ ...state, user: users[user] });
        } else {
            return this._getUserUseCase.execute(id).pipe(
                tap((user) => {
                    setState({ ...state, users: [user], user });
                })
            );
        }
    }

    @Action(CreateUser)
    create ({ getState, patchState }: StateContext<UserStateModel>, { payload }: CreateUser): Observable<UserDTO> {
        return this._createUserUseCase.execute(payload).pipe(
            tap(user => {
                const state = getState();
                patchState({ users: [...state.users, user] });
            })
        );
    }

    @Action(UpdateUser)
    update ({ getState, patchState }: StateContext<UserStateModel>, { payload }: UpdateUser): Observable<UserDTO> {
        return this._updateUserUseCase.execute(payload).pipe(
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
