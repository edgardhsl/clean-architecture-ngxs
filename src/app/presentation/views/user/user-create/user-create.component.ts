import { UserDTO } from "@/data/dtos/user/user.dto";
import { CreateUser } from "@/store/actions/user.action";
import { SnackbarService } from "@aiandralves/tivic-ui";
import { Component, inject } from "@angular/core";
import { Router } from "@angular/router";
import { Store } from "@ngxs/store";
import { UserFormComponent } from "../shared/user-form/user-form.component";

@Component({
    selector: "user-create",
    standalone: true,
    imports: [UserFormComponent],
    template: `
        <user-form (save)="onSubmit($event)" />
    `
})
export class UserCreateComponent {
    private _store = inject(Store);
    private _router = inject(Router);
    private _snackbar = inject(SnackbarService);

    onSubmit (user: UserDTO) {
        this._store.dispatch(new CreateUser(user)).subscribe(() => {
            this._snackbar.success("Usuário cadastrado com sucesso.");
            this._router.navigateByUrl("/usuarios");
        });
    }
}
