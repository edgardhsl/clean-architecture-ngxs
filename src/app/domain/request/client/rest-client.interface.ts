import { Observable } from "rxjs";

export abstract class IRestClient<T> {
    abstract get(url: string, filter?: any): Observable<T | T[]>;
    abstract post(url: string, body: T): Observable<T>;
    abstract put(url: string, body: T): Observable<T>;
    abstract delete(url: string): Observable<T>;
}
