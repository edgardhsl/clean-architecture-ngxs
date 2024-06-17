/* tslint:disable */
import { HttpClient } from "@/core/http/http-api";
import { HttpClientImpl } from "@/core/http/http-client.impl";
import { AxiosHttpClient } from "@/core/http/impl/axios/axios";

export const sharedProviders = [
    {
        provide: HttpClient,
        useFactory: () => {
            return new HttpClientImpl(
                new AxiosHttpClient()
                /* new AngularHttpClient() */

            );
        }
    }
];
