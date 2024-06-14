import { Observable } from "rxjs";
import { RestClientUtil } from "../utils/rest-client.util";
import { IRestClient } from "./rest-client.interface";

export class RestClient<T> implements IRestClient<T> {
    constructor (
        private _restClientUtil: RestClientUtil<T>
    ) {}

    get (url: string, filter?: any): Observable<T | T[]> {
        return this._restClientUtil.get(url, filter);
    }

    post (url: string, body: T): Observable<T> {
        return this._restClientUtil.post(url, body);
    }

    put (url: string, body: T): Observable<T> {
        return this._restClientUtil.put(url, body);
    }

    delete (url: string): Observable<T> {
        return this._restClientUtil.delete(url);
    }
}
