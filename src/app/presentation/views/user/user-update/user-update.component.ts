import { UserDTO } from "@/data/dtos/user/user.dto";
import { UpdateUser } from "@/data/store/actions/user.action";
import { SnackbarService } from "@aiandralves/tivic-ui";
import { Component, inject } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Store } from "@ngxs/store";
import { UserFormComponent } from "../shared/user-form/user-form.component";

@Component({
    selector: "user-update",
    standalone: true,
    imports: [UserFormComponent],
    template: `
        <user-form [user]="user" (save)="onSubmit($event)" />
    `
})
export class UserUpdateComponent {
    private _store = inject(Store);
    private _router = inject(Router);
    private _snackbar = inject(SnackbarService);

    user: UserDTO = inject(ActivatedRoute).snapshot.data.user;

    onSubmit (user: UserDTO) {
        user.id = this.user.id;

        this._store.dispatch(new UpdateUser(user)).subscribe(() => {
            this._snackbar.success("Usuário atualizado com sucesso.");
            this._router.navigateByUrl("/usuarios");
        });
    }
}
