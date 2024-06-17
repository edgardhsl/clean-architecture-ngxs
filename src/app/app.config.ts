import { SnackbarService } from "@aiandralves/tivic-ui";
import { HttpClient, provideHttpClient } from "@angular/common/http";
import { ApplicationConfig, makeEnvironmentProviders, provideZoneChangeDetection } from "@angular/core";
import { provideAnimationsAsync } from "@angular/platform-browser/animations/async";
import { provideRouter } from "@angular/router";
import { routes } from "./app.routes";
import { HttpClientImpl } from "./core/http/http-client.impl";
import { AxiosHttpClient } from "./core/http/impl/axios/axios";
import { dataProviders } from "./data/data.providers";

const services = [SnackbarService];

export const appConfig: ApplicationConfig = {
    providers: [
        provideZoneChangeDetection({ eventCoalescing: true }),
        provideAnimationsAsync(),
        provideRouter(routes),
        provideHttpClient(),
        services,
        dataProviders,
        makeEnvironmentProviders([{
            provide: HttpClient,
            useFactory: () => {
                return new HttpClientImpl(new AxiosHttpClient());
            }
        }])
    ]
};
