import { RestClientUtil } from "@/domain/request/utils/rest-client.util";
import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { environment } from "@env/environment.prod";
import { Observable } from "rxjs";

@Injectable({
    providedIn: "root"
})
export class HttpClientUtil<T> implements RestClientUtil<T> {
    private _httpClient = inject(HttpClient);
    private _api = environment.apiRoot;

    get (url: string, filter?: any): Observable<T | T[]> {
        return this._httpClient.get<T | T[]>(`${this._api}/${url}`, { params: { filter } });
    }

    post (url: string, body: T): Observable<T> {
        return this._httpClient.post<T>(`${this._api}/${url}`, body);
    }

    put (url: string, body: Partial<T>): Observable<T> {
        return this._httpClient.put<T>(`${this._api}/${url}`, body);
    }

    delete (url: string): Observable<T> {
        return this._httpClient.delete<T>(`${this._api}/${url}`);
    }
}
