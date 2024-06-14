import { withNgxsReduxDevtoolsPlugin } from "@ngxs/devtools-plugin";
import { withNgxsLoggerPlugin } from "@ngxs/logger-plugin";
import { withNgxsStoragePlugin } from "@ngxs/storage-plugin";
import { provideStore } from "@ngxs/store";
import { DirectorState } from "./states/director.state";
import { UserState } from "./states/user.state";

export const storeProviders = [
    provideStore(
        [UserState, DirectorState],
        withNgxsStoragePlugin({
            keys: "*"
        }),
        withNgxsLoggerPlugin(),
        withNgxsReduxDevtoolsPlugin()
    )
];
