import { HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: "root"
})
export class HttpFilter<T> {
    build (filters: T) {
        if (filters) {
            const httpParams = new HttpParams();
            Object.keys(filters).forEach(attr => {
                if (!filters[attr]) delete filters[attr];
                else httpParams.append(attr, filters[attr]);
            });
            return filters;
        }
        return new HttpParams();
    }
}
