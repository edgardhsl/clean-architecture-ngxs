import { Observable } from "rxjs";

export abstract class HttpClient {
    get<T> (url: string, filter?: any): Observable<T | T[]> { throw new Error("Not implemented."); };
    post<T> (url: string, body: T): Observable<T> { throw new Error("Not implemented."); };
    put<T> (url: string, body: T): Observable<T> { throw new Error("Not implemented."); };
    delete<T> (url: string): Observable<T> { throw new Error("Not implemented."); };
}
