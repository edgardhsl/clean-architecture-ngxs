import { RestClient } from "@/domain/request/client/rest-client";
import { userProviders } from "./providers/user.providers";
import { HttpClientUtil } from "./utils/http-client.util";

export const clientProviders = [
    userProviders,
    {
        provide: RestClient,
        useClass: HttpClientUtil
    }
];
