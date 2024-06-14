import { Observable } from "rxjs";

export abstract class IRestClient<T> {
    abstract get(url: string): Promise<T> | Observable<T>;
}
