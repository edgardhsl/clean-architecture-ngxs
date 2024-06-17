import { Observable } from "rxjs";

export interface HttpApiClient {
    get<T>(url: string, filter?: any): Observable<T | T[]>;
    post<T>(url: string, body: T): Observable<T>;
    put<T>(url: string, body: T): Observable<T>;
    delete<T>(url: string): Observable<T>;

    isClientOk(): boolean;
}
