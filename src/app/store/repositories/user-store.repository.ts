import { UserDTO } from "@/data/dtos/user/user.dto";
import { StateContext } from "@ngxs/store";
import { Observable } from "rxjs";
import { CreateUser, GetUser, UpdateUser } from "../actions/user.action";
import { UserStateModel } from "../models/user-state.model";

export interface UserStoreRepository {
    find(ctx: StateContext<UserStateModel>): Observable<UserDTO[]>;
    get(ctx: StateContext<UserStateModel>, { id }: GetUser): Observable<UserDTO> | undefined;
    create(ctx: StateContext<UserStateModel>, { payload }: CreateUser): Observable<UserDTO>;
    update(ctx: StateContext<UserStateModel>, { id, payload }: UpdateUser): Observable<UserDTO>;
}
