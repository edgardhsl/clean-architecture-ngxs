import { Observable } from "rxjs";

export interface UseCase<D, R> {
    execute(params: D): Observable<R>;
}
