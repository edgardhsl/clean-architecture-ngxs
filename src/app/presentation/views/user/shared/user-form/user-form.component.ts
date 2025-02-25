import { UserDTO, makeUser } from "@/data/dtos/user/user.dto";
import { sharedModule } from "@/presentation/shared/shared.module";
import { CustomFormBuilder, FormType, PasswordValidator, RegexHelper } from "@aiandralves/tivic-ui";
import { ChangeDetectionStrategy, Component, OnInit, inject, input, output } from "@angular/core";
import { FormGroup, Validators } from "@angular/forms";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";

const modules = [
    ...sharedModule,
    MatFormFieldModule,
    MatInputModule
];

@Component({
    selector: "user-form",
    standalone: true,
    imports: [...modules],
    templateUrl: "./user-form.component.html",
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserFormComponent implements OnInit {
    private _customFormBuilder = inject(CustomFormBuilder);
    user = input<UserDTO | null>(null);
    save = output<UserDTO>();

    formGroup: FormGroup<FormType<UserDTO>> = this._customFormBuilder.create(makeUser());

    get enabled () {
        return this.formGroup.enabled;
    }

    ngOnInit () {
        if (this.user()?.id !== undefined) {
            this._customFormBuilder.update(this.formGroup, makeUser(this.user()));
            this.formGroup.disable();
        }
        this._setValidators();
    }

    onSubmit () {
        const user: UserDTO = this.formGroup.getRawValue();
        this.save.emit(user);
    }

    private _setValidators () {
        const validators = {
            name: [Validators.required, Validators.minLength(3)],
            email: [Validators.required, Validators.email],
            password: [Validators.required, Validators.minLength(8), PasswordValidator.regex(RegexHelper.password)]
        };
        this._customFormBuilder.setValidators(this.formGroup, validators);
    }
}
