import { SnackbarService } from "@aiandralves/tivic-ui";
import { provideHttpClient } from "@angular/common/http";
import { ApplicationConfig, ValueProvider, provideZoneChangeDetection } from "@angular/core";
import { MAT_SNACK_BAR_DEFAULT_OPTIONS, MatSnackBarConfig } from "@angular/material/snack-bar";
import { provideAnimationsAsync } from "@angular/platform-browser/animations/async";
import { provideRouter } from "@angular/router";
import { routes } from "./app.routes";
import { dataProviders } from "./data/data.providers";
import { storeProviders } from "./store/store.providers";

const snackbarConfig: ValueProvider = {
    provide: MAT_SNACK_BAR_DEFAULT_OPTIONS,
    useValue: {
        duration: 3000,
        horizontalPosition: "right",
        verticalPosition: "top"
    } as MatSnackBarConfig
};

const services = [SnackbarService];

export const appConfig: ApplicationConfig = {
    providers: [
        provideZoneChangeDetection({ eventCoalescing: true }),
        provideAnimationsAsync(),
        provideRouter(routes),
        provideHttpClient(),
        services,
        storeProviders,
        dataProviders,
        snackbarConfig
    ]
};
