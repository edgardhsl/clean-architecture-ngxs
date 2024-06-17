import { SnackbarService } from "@aiandralves/tivic-ui";
import { provideHttpClient } from "@angular/common/http";
import { ApplicationConfig, provideZoneChangeDetection } from "@angular/core";
import { provideAnimationsAsync } from "@angular/platform-browser/animations/async";
import { provideRouter } from "@angular/router";
import { routes } from "./app.routes";
import { dataProviders } from "./data/data.providers";

const services = [SnackbarService];

export const appConfig: ApplicationConfig = {
    providers: [
        provideZoneChangeDetection({ eventCoalescing: true }),
        provideAnimationsAsync(),
        provideRouter(routes),
        provideHttpClient(),
        services,
        dataProviders
    ]
};
