import { UserDTO } from "@/data/dtos/user/user.dto";
import { FindUser } from "@/data/store/actions/user.action";
import { UserState } from "@/data/store/states/user.state";
import { sharedModule } from "@/presentation/shared/shared.module";
import { ChangeDetectionStrategy, Component, Signal, inject } from "@angular/core";
import { MatTableModule } from "@angular/material/table";
import { Router } from "@angular/router";
import { Store } from "@ngxs/store";

const modules = [
    ...sharedModule,
    MatTableModule
];

@Component({
    selector: "user-search",
    standalone: true,
    imports: [...modules],
    templateUrl: "./user-search.component.html",
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserSearchComponent {
    private _store = inject(Store);
    private _router = inject(Router);

    columns: string[] = ["id", "name", "email", "edit"];

    users: Signal<UserDTO[]> = this._store.selectSignal(UserState.users);

    constructor () {
        this._store.dispatch(new FindUser()).subscribe();
    }

    onEdit (user: UserDTO) {
        this._router.navigate(["/usuarios", user.id]);
    }
}
