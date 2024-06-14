import { DirectorDTO } from "@/data/dtos/director.dto";
import { HttpDirectorService } from "@/data/services/http-director.service";
import { Injectable, inject } from "@angular/core";
import { Action, Selector, State, StateContext } from "@ngxs/store";
import { Observable, tap } from "rxjs";
import { CreateDirector, FindDirector, GetDirector, UpdateDirector } from "../actions/director.actions";
import { DirectorStateModel } from "../models/director-state.model";
import { DirectorStoreRepository } from "../repositories/director-store.repository";

@State<DirectorStateModel>({
    name: "director",
    defaults: {
        directors: [],
        director: {} as DirectorDTO,
    }
})
@Injectable()
export class DirectorState implements DirectorStoreRepository {
    private _directorService = inject(HttpDirectorService);

    @Selector()
    static directors (state: DirectorStateModel) {
        return state.directors;
    }

    @Selector()
    static director (state: DirectorStateModel) {
        return state.director;
    }

    @Action(FindDirector)
    find ({ getState, setState }: StateContext<DirectorStateModel>): Observable<DirectorDTO[]> {
        return this._directorService.find().pipe(
            tap((directors) => {
                const state = getState();
                setState({ ...state, directors });
            })
        );
    }

    @Action(GetDirector)
    get ({ getState, setState }: StateContext<DirectorStateModel>, { id }: GetDirector): Observable<DirectorDTO> | undefined {
        const state = getState();
        const directors = state.directors;
        const director = directors.findIndex((director: DirectorDTO) => director.id === id);

        if (id && (id !== "" || id !== null)) {
            setState({ ...state, director: directors[director] });
        } else {
            return this._directorService.get(id).pipe(
                tap((director) => {
                    setState({ ...state, directors: [director], director });
                })
            );
        }
    }

    @Action(CreateDirector)
    create ({ getState, patchState }: StateContext<DirectorStateModel>, { payload }: CreateDirector): Observable<DirectorDTO> {
        return this._directorService.create(payload).pipe(
            tap(director => {
                const state = getState();
                patchState({ directors: [...state.directors, director] });
            })
        );
    }

    @Action(UpdateDirector)
    update ({ getState, patchState }: StateContext<DirectorStateModel>, { id, payload }: UpdateDirector): Observable<DirectorDTO> {
        return this._directorService.update(id, payload).pipe(
            tap(() => {
                const state = getState();
                const directors = state.directors.map(director => {
                    return director.id === payload.id ? { ...director, ...payload } : director;
                });
                return patchState({ directors });
            })
        );
    }
}
