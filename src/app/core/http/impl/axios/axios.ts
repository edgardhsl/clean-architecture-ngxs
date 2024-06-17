import { environment } from "@env/environment.prod";
import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { Observable, from, map } from "rxjs";
import { HttpApiClient } from "../http-api-client";
import { HttpFilter } from "../http-filter";

export class AxiosHttpClient implements HttpApiClient {
    private axiosInstance: AxiosInstance;

    constructor () {
        this.axiosInstance = axios.create({
            // Configurações básicas do Axios, como baseURL, timeout, etc.
            baseURL: this._buildUrl(environment),
            timeout: 10000
        });

        console.log(`
        -------------------------------------
        - Usando o AxiosHttpClient.
        -------------------------------------
        `);
    }

    get<T> (url: string, filter?: HttpFilter): Observable<T | T[]> {
        const config: AxiosRequestConfig = {
            params: filter.getFilters()
        };
        return from(this.axiosInstance.get<T | T[]>(url, config))
            .pipe(map((response: AxiosResponse) => response.data));
    }

    post<T> (url: string, body: T): Observable<T> {
        return from(this.axiosInstance.post<T>(url, body))
            .pipe(map((response: AxiosResponse) => response.data));
    }

    put<T> (url: string, body: T): Observable<T> {
        return from(this.axiosInstance.put<T>(url, body))
            .pipe(map((response: AxiosResponse) => response.data));
    }

    delete<T> (url: string): Observable<T> {
        return from(this.axiosInstance.delete<T>(url))
            .pipe(map((response: AxiosResponse) => response.data));
    }

    isClientOk (): boolean {
        // Implementação básica para verificar se o Axios está configurado corretamente
        return !!this.axiosInstance;
    }

    _buildUrl (env) {
        const { protocol, host, port, context, apiroot } = env;
        // Monta a URL considerando que todas as propriedades estão presentes
        return `${protocol}://${host}:${port}/${context}/${apiroot}`;
    }
}
