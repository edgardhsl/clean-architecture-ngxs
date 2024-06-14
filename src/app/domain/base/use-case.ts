import { Observable } from "rxjs";

export interface UseCase<Body, Response> {
    execute(body: Body): Observable<Response>;
}
