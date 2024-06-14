import { Observable } from "rxjs";

export abstract class RestClientUtil<T> {
    abstract get(url : string, filter?: any): Observable<T | T[]>;
    abstract post(url : string, body: T): Observable<T>;
    abstract put(url : string, body: Partial<T>): Observable<T>;
    abstract delete(url : string): Observable<T>;
}
