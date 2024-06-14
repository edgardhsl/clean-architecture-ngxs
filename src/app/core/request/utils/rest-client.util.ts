import { Observable } from "rxjs";

export abstract class RestClientUtil<T> {
    abstract get(url: string): Promise<T> | Observable<T>;
}
