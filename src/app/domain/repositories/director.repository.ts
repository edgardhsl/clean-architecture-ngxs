import { Observable } from "rxjs";
import { Director } from "../entities/director";

export abstract class DirectorRepository {
    abstract find(): Observable<Director[]>;
    abstract get(id: string): Observable<Director>;
    abstract create(director: Director): Observable<Director>;
    abstract update(id: string, director: Director): Observable<Director>;
}