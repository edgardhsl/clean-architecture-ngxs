import { ButtonComponent } from "@aiandralves/tivic-ui";
import { ChangeDetectionStrategy, Component } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatToolbarModule } from "@angular/material/toolbar";
import { RouterModule } from "@angular/router";

const modules = [MatToolbarModule, ButtonComponent, MatIconModule, MatButtonModule, RouterModule];

@Component({
    selector: "navbar",
    standalone: true,
    imports: [...modules],
    templateUrl: "./navbar.component.html",
    styleUrl: "./navbar.component.scss",
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent  {}
