import { UserDTO } from "@/data/dtos/user/user.dto";
import { FindUser } from "@/store/actions/user.action";
import { UserState } from "@/store/states/user.state";
import { ChangeDetectionStrategy, Component, Signal, inject } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatTableModule } from "@angular/material/table";
import { Router, RouterLink } from "@angular/router";

import { Store } from "@ngxs/store";

const modules = [
    MatIconModule,
    MatButtonModule,
    MatTableModule,
    RouterLink
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
