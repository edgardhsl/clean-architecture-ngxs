import { ButtonComponent } from "@aiandralves/tivic-ui";
import { ReactiveFormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { RouterModule } from "@angular/router";

export const sharedModule = [
    ReactiveFormsModule,
    MatIconModule,
    RouterModule,
    MatButtonModule,

    /**
     * @name @aiandraalves/tivic-ui
     */
    ButtonComponent
];
