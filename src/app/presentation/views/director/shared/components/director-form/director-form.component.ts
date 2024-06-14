import { DirectorDTO } from "@/data/dtos/director.dto";
import { sharedModule } from "@/presentation/shared/shared.module";
import { Component, OnInit, input } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";

@Component({
    selector: "director-form",
    standalone: true,
    imports: [...sharedModule],
    templateUrl: "./director-form.component.html",
})
export class DirectorFormComponent implements OnInit {
    director = input<DirectorDTO | null>(null);

    formGroup: FormGroup = new FormGroup({
        name: new FormControl<string>("", { nonNullable: true }),
        description: new FormControl<string>("", { nonNullable: true }),
    });

    ngOnInit() {
        
    }
}
