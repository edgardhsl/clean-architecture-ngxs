import { Director } from "@/domain/entities/director";
import { DirectorRepository } from "@/domain/repositories/director.repository";
import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { environment } from "@env/environment.prod";
import { Observable, first, map } from "rxjs";
import { DirectorDTO } from "../dtos/director.dto";
import { DirectorMapper } from "../mappers/director.mapper";

@Injectable({
    providedIn: "root"
})
export class HttpDirectorService implements DirectorRepository {
    private _httpClient = inject(HttpClient);
    private readonly _api = environment.apiRoot.concat("/directors");

    directorMapper = new DirectorMapper();

    find (): Observable<Director[]> {
        return this._httpClient.get<DirectorDTO[]>(this._api).pipe(
            first(),
            map(response => {
                return response.map(this.directorMapper.fromMap);
            })
        );
    }

    get (id: string): Observable<Director> {
        return this._httpClient.get<DirectorDTO>(`${this._api}/${id}`).pipe(
            first(),
            map(this.directorMapper.fromMap)
        );
    }

    create (director: DirectorDTO): Observable<Director> {
        return this._httpClient.post<DirectorDTO>(this._api, director).pipe(
            first(),
            map(this.directorMapper.fromMap)
        );
    }

    update (id: string, director: DirectorDTO): Observable<Director> {
        return this._httpClient.put<DirectorDTO>(`${this._api}/${id}`, director).pipe(
            first(),
            map(this.directorMapper.fromMap)
        );
    }
}