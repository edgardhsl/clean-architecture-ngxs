import { HttpFilter } from "@aiandralves/tivic-ui";
import { Observable } from "rxjs";
import { HttpClient } from "./http-api";
import { HttpApiClient } from "./impl/http-api-client";

export class HttpClientImpl implements HttpClient {
    constructor (private client: HttpApiClient) {
        if (!this.client.isClientOk()) {
            throw new Error("O cliente http não foi inicializado.");
        }
    }

    get<T> (url: string, filter?: HttpFilter): Observable<T | T[]> {
        return this.client.get<T>(url, filter);
    }

    post<T> (url: string, body: T): Observable<T> {
        return this.client.post<T>(url, body);
    }

    put<T> (url: string, body: T): Observable<T> {
        return this.client.put<T>(url, body);
    }

    delete<T> (url: string): Observable<T> {
        return this.client.delete<T>(url);
    }
}
