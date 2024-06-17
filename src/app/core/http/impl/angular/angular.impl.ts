import { HttpClient, HttpParams } from "@angular/common/http";
import { inject } from "@angular/core";
import { Observable } from "rxjs";
import { HttpApiClient } from "../http-api-client";

export class AngularHttpClient implements HttpApiClient {
    private _httpClient: HttpClient = inject(HttpClient);

    constructor () { }

    get<T> (url: string, filter?: any): Observable<T | T[]> {
        let params = new HttpParams();
        if (filter) {
            Object.keys(filter).forEach((key) => {
                params = params.set(key, filter[key]);
            });
        }
        return this._httpClient.get<T | T[]>(url, { params });
    }

    post<T> (url: string, body: T): Observable<T> {
        return this._httpClient.post<T>(url, body);
    }

    put<T> (url: string, body: T): Observable<T> {
        return this._httpClient.put<T>(url, body);
    }

    delete<T> (url: string): Observable<T> {
        return this._httpClient.delete<T>(url);
    }

    isClientOk (): boolean {
        return this._httpClient !== null;
    }
}
