import { HttpClient } from "@/core/http/http-api";
import { UserDTO } from "@/data/dtos/user/user.dto";
import { FindUser } from "@/data/store/actions/user.action";
import { UserState } from "@/data/store/states/user.state";
import { sharedModule } from "@/presentation/shared/shared.module";
import { sharedProviders } from "@/presentation/shared/shared.providers";
import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component, Signal, inject } from "@angular/core";
import { MatTableModule } from "@angular/material/table";
import { Router } from "@angular/router";
import { Store } from "@ngxs/store";

const modules = [
    CommonModule,
    ...sharedModule,
    MatTableModule
];

@Component({
    selector: "user-search",
    standalone: true,
    imports: [...modules],
    providers: [...sharedProviders],
    templateUrl: "./user-search.component.html",
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserSearchComponent {
    private _store = inject(Store);
    private _router = inject(Router);
    private _httpClient: HttpClient = inject(HttpClient);

    columns: string[] = ["id", "name", "email", "edit"];

    dataSource$;

    users: Signal<UserDTO[]> = this._store.selectSignal(UserState.users);

    constructor () {
        this._store.dispatch(new FindUser()).subscribe();
    }

    ngOnInit () {
        this.dataSource$ = this._httpClient.get<any>("/seg/usuarios");
    }

    onEdit (user: UserDTO) {
        this._router.navigate(["/usuarios", user.id]);
    }
}
