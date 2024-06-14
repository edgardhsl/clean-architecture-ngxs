import { DirectorDTO } from "@/data/dtos/director.dto";
import { StateContext } from "@ngxs/store";
import { Observable } from "rxjs";
import { CreateDirector, GetDirector, UpdateDirector } from "../actions/director.actions";
import { DirectorStateModel } from "../models/director-state.model";

export interface DirectorStoreRepository {
    find(ctx: StateContext<DirectorStateModel>): Observable<DirectorDTO[]>;
    get(ctx: StateContext<DirectorStateModel>, { id }: GetDirector): Observable<DirectorDTO> | undefined;
    create(ctx: StateContext<DirectorStateModel>, { payload }: CreateDirector): Observable<DirectorDTO>;
    update(ctx: StateContext<DirectorStateModel>, { id, payload }: UpdateDirector): Observable<DirectorDTO>;
}
