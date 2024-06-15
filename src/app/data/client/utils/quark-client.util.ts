import { RestClientUtil } from "@/domain/request/utils/rest-client.util";
import {
    HttpDelete,
    HttpGet,
    HttpPost,
    HttpPut,
    HttpResponse,
    IFilter,
    JSONData,
    Quark,
    Url
} from "@aiandralves/tivic-ui";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "@env/environment.prod";
import { Observable } from "rxjs";

export interface QuarkFilter {
    getFilters(): IFilter;
}

@Injectable({
    providedIn: "root"
})
export class QuarkClientUtil<T> implements RestClientUtil<T> {
    constructor (private _httpClient: HttpClient) {
        Quark.initializeHttpClient(this._httpClient);
    }

    get (url: string, filter?: QuarkFilter): Observable<T> {
        const quark = new Quark(
            new HttpGet({
                url: new Url({
                    url,
                    environment,
                    filter: filter?.getFilters()
                })
            }),
            new HttpResponse([] as T | {} as T | T)
        );
        return quark.call();
    }

    post (url: string, body: T): Observable<T> {
        const quark = new Quark(
            new HttpPost({
                url: new Url({
                    url,
                    environment
                }),
                data: new JSONData(body)
            }),
            new HttpResponse({} as T | T)
        );
        return quark.call();
    }

    put (url: string, body: Partial<T>): Observable<T> {
        const quark = new Quark(
            new HttpPut({
                url: new Url({
                    url,
                    environment
                }),
                data: new JSONData(body)
            }),
            new HttpResponse({} as T | T)
        );
        return quark.call();
    }

    delete (url: string): Observable<T> {
        const quark = new Quark(
            new HttpDelete({
                url: new Url({
                    url,
                    environment
                })
            }),
            new HttpResponse({} as T | T)
        );
        return quark.call();
    }
}
