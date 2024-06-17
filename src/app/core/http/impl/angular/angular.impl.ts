import { HttpClient, HttpParams } from "@angular/common/http";
import { inject } from "@angular/core";
import { environment } from "@env/environment.prod";
import { Observable } from "rxjs";
import { HttpApiClient } from "../http-api-client";
import { HttpFilter } from "@aiandralves/tivic-ui";

export class AngularHttpClient implements HttpApiClient {
    private _httpClient: HttpClient = inject(HttpClient);
    private _apiUrl = this._buildUrl(environment);

    constructor () {
        console.log(`
        -------------------------------------
        - Usando o AngularHttpClient.
        -------------------------------------
        `);
    }

    get<T> (url: string, filter?: HttpFilter): Observable<T | T[]> {
        let params = new HttpParams();
        if (filter) {
            Object.keys(filter).forEach((key) => {
                params = params.set(key, filter[key]);
            });
        }
        return this._httpClient.get<T | T[]>(`${this._apiUrl}${url}`, { params });
    }

    post<T> (url: string, body: T): Observable<T> {
        return this._httpClient.post<T>(`${this._apiUrl}${url}`, body);
    }

    put<T> (url: string, body: T): Observable<T> {
        return this._httpClient.put<T>(`${this._apiUrl}${url}`, body);
    }

    delete<T> (url: string): Observable<T> {
        return this._httpClient.delete<T>(`${this._apiUrl}${url}`);
    }

    isClientOk (): boolean {
        return this._httpClient !== null;
    }

    _buildUrl (env) {
        const { protocol, host, port, context, apiroot } = env;
        // Monta a URL considerando que todas as propriedades estão presentes
        return `${protocol}://${host}:${port}/${context}/${apiroot}`;
    }
}
